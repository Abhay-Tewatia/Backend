import 'dotenv/config';
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Morgan logging format
const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const parts = message.split(' ');
      const logObject = {
        method: parts[0],
        url: parts[1],
        status: parts[2],
        responseTime: parts[3],
      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));

// In-memory data store
let teaData = [];
let nextId = 1;

// ------------------- ROUTES -------------------

// ✅ Add a new tea
app.post('/teas', (req, res) => {
  
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);

  res.status(201).json(newTea);
});

// ✅ Get all teas
app.get('/teas', (req, res) => {
  res.status(200).json(teaData);
});

// ✅ Get tea by ID
app.get('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).json({ message: 'Tea not found' });
  }

  res.status(200).json(tea);
});

// ✅ Update tea (partial update supported)
app.put('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).json({ message: 'Tea not found' });
  }

  const { name, price } = req.body;

  if (name) tea.name = name;
  if (price !== undefined) {
    if (typeof price !== 'number') {
      return res.status(400).json({ message: 'Price must be a number' });
    }
    tea.price = price;
  }

  res.status(200).json(tea);
});

// ✅ Delete tea
app.delete('/teas/:id', (req, res) => {
  const index = teaData.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Tea not found' });
  }

  teaData.splice(index, 1);

  res.status(200).json({ message: 'Deleted successfully' });
});

// ------------------- ERROR HANDLING -------------------

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ------------------- SERVER -------------------

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
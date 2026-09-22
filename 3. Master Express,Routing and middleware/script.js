const express = require("express");

const app = express();

app.use(function (req, res, next) {
    console.log("middleware chala");
    next();
});

app.use(function (req, res, next) {
    console.log("middleware chala ek aur baar");
    next();
});

// Routes
app.get("/", function (req, res) {
    res.send("champion mera abhay");
});

app.get("/profile", function (req, res) {
    res.send("champion mera abhay node js seekhi");
});

// Error testing route
app.get("/error", function (req, res, next) {
    const err = new Error("Chacha error aa gaya!");
    next(err);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.log("Error aa gaya:", err.message);

    res.status(500).json({
        success: false,
        message: "Kuch toh gadbad hai chacha 😄"
    });
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
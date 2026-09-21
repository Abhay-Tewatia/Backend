// fundamental of javascript
// arrays and objects
// function return
// async js coding

async function abcd(){
    // -------
   var blob =  await fetch('https://randomuser.me/api/')
    // ------
    var rs = await blob.json();
    console.log(rs.results[0].name);
    
}
abcd()


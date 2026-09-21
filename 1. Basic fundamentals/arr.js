// fundamental of javascript
// arrays and objects
// function return
// async js coding

// array.forEach(element => {
    
// });

// map filter find indexof

var arr = [1,2,3,4]
arr.forEach(function(val){
    console.log(val + " Hello");
})

var chacha  = arr.map(function(val){
    console.log(12 + val);
    return val;
})
console.log(chacha);

var filterarr = arr.filter(function(val){
    if(val >3) return true;

    else return false;
})
console.log(filterarr)

var ans = arr.find(function(val){
    if(val === 2) return val;
})
console.log(ans);

arr.indexOf(-12)
arr.indexOf(-12)
arr.indexOf(2)
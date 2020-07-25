(function(){
    //IIFE -immediatly invoked function
    var age=5;
})();
{
    //blocks
    let z=10;
    const x=3;
    var y=5;
    {
        console.log(z);
        console.log(x);
        console.log(y);
        
    }
    console.log(z);
    console.log(x);
    console.log(y);
    
    console.log(x,y);
    var d=100;//window.d in console
    console.log(d);
    {
        console.log(d);
        d=9;
    }
    console.log(d);
}
console.log(d);
let x=10;//console tests
var y=10;
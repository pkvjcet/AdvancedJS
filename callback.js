add=(x,y,callback)=>{
    var z=x+y;
    callback(z);
}
display=(z)=>{
    console.log("task Completed"+z);
}
var x=10;
var y=12;
add(x,y,display)
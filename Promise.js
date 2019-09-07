var myPromise=new Promise( (resolve,reject)=>{
    var myGrade="A+";
    if(myGrade=="A+"){
        resolve();
    }
    else{
        reject();
    }
});

myPromise.then(()=>{
    console.log("Promise satisfied");
}).catch(()=>{
    console.log("Promise rejected");
});

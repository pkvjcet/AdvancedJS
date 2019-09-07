$(document).ready(function(){
  
    $("#myaddbutton").click( ()=>{   
        add=(x,y,callback)=>{
            var z=x+y;
            callback(z);
        }
        display=(z)=>{
            console.log("task Completed"+z);
        }
        var x=$('#numberone') .val()   ; 
        var y=$('#numbertwo') .val()   ; 
        add(parseInt(x),parseInt(y),display);
       
           
    });
    
});

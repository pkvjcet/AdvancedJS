$(document).ready( ()=>{
    $.ajax( {
        type:"GET",
        url:"http://127.0.0.1:8080/mydata.json",
        success:(response)=>{
            console.log(response);
            var output="<table class='table'><tr><th>NAME</th><th>AGE</th><th>DOB</th><th>COLLEGE</th></tr>";
            for(i in response){
                var name=response[i].name;
                var age=response[i].age;
                var dob=response[i].dob;
                var college=response[i].college;
                output+="<tr><td>"+name+"</td><td>"+age+"</td><td>"+dob+"</td><td>"+college+"</td></tr>";
            }
            output+="</table>";
            $('#result').html(output);
        }
    } );
});
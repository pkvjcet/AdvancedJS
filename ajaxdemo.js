$(document).ready( ()=>{
    $.ajax( {
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
        success:(response)=>{
            console.log(response);
            var output="<table class='table'><tr><th>NAME</th><th>USERNAME</th><th>EMAIL</th><th>Street</th></tr>";
            for(i in response){
                var name=response[i].name;
                var username=response[i].username;
                var email=response[i].email;
                var street=response[i].address.street;
                output+="<tr><td>"+name+"</td><td>"+username+"</td><td>"+email+"</td><td>"+street+"</td></tr>";
            }
            output+="</table>";
            $('#result').html(output);
        }
    } );
});
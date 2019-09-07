$(document).ready(function(){
    $('p').click(function(){
        $(this).hide();
    });
    $("#mysubmitbutton").click(function(){
        var empid=$("#empid").val();
        var empname=$("#empname").val();
        var empaddress=$("#empaddress").val();
        var empmobile=$("#empmobile").val();
        var emempsalary=$("#empsalary").val();
        var empdesignation=$("#empdesignation").val();

        console.log(empid+empname+empaddress+empmobile+emempsalary+empdesignation);
    });
});
/*function readValues()
{
    var empid=document.getElementById('empid').Value;
    var empname=document.getElementById('empname').Value;
    var empaddress=document.getElementById('empaddress').Value;
    var empmobile=document.getElementById('empmobile').Value;
    var empsalary=document.getElementById('empsalary').Value;
    var empdesignation=document.getElementById('empdesignation').Value;
   
}*/

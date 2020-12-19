function display(val)
{
document.getElementById('final_output').value+=val;
}
function solve()
{
var expr=document.getElementById('final_output').value;
var soln=eval(expr);
document.getElementById('final_output').value=soln;
}
function back()
{
 var value=document.getElementById('final_output').value;
 document.getElementById('final_output').value=value.substr(0, value.length-1);
 }
 function clr()
{
 document.getElementById('final_output').value="";
 }
   
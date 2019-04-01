var btn=document.getElementById("btn");
var input=document.getElementById("task_ip");
var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
var body=document.getElementById("mainbody")
var l=document.getElementById("l");
var count=0;
var array=[];
var array2=[];
var parent=document.getElementById("tbody");

input.addEventListener("mouseover",function(e)
{
	input.setAttribute("style","background:black ; color:white");

});
input.addEventListener("mouseout",function(e)
{
	input.removeAttribute("style");
	//console.log(e);

});
btn.onclick=function()
{
if(input.value=="")
{
alert("please enter text");
return;
}
array.push(input.value);
var dt=new Date().toString();
array2.push(dt);
generateRows();
}
function generateRows()
{
parent.innerHTML="";
for(var i=0;i<array.length;i++)
{
var node=document.createElement("tr");
node.setAttribute("class","abc");
node.setAttribute("id",i);
var node1=document.createElement("td");
node1.innerHTML=i+1;
node1.setAttribute("align","center"); 
node.appendChild(node1);
var node2=document.createElement("td");
node2.setAttribute("align","center");
node2.innerHTML=array[i];
node.appendChild(node2);
var date=document.createElement("td");
date.setAttribute("align","center")
date.innerHTML=array2[i]; 
node.appendChild(date);
var node3=document.createElement("td");
node3.setAttribute("align","center");
var btn=document.createElement("button");
btn.innerHTML="X";
btn.setAttribute("id","del");
btn.addEventListener("click",function(e)
{
array.splice(e.target.parentNode.parentNode.id,1);
array2.splice(e.target.parentNode.parentNode.id,1);
generateRows();


});
node3.appendChild(btn);
node.appendChild(node3);
parent.appendChild(node);
input.value="";
}
}
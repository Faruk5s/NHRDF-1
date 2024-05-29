function display()
{

var num =document.getElementById("num").value;
var count =0;
var text="";
for (count =1; count <=10; count =count +1){
    text=text + count + "*" + num + "=" + num*count + "<br>";
}
document.getElementById("output").innerHTML = text;
}


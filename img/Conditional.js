var age =19;
var name ;
if (age>=0 && age<=2) {
    name ="baby"
    
}
else if  (age>=3 && age<=5)
     {
    name ="Toddler"
    
}
else if  (age>=6 && age<=12)
     {
    name ="Child"
    
}
else if  (age>=13 && age<=17)
     {
    name ="Teen"
    
}
else if  (age>=18 && age<=21)
     {
    name ="Young"
    
}

else{
    name ="old"
}
 console.log(name)
 

   function Display() {
    
    var number = document.getElementById("mark").value;
    var grade ;
    if (number>=80 && number<=100) {
        grade = "A+"
    }
    else if (number>=60 && number<=79) {
        grade = "B"
    }
    else if (number>=50 && number<=59) {
        grade = "B"
    }
    else if (number>=40 && number<=49) {
        grade = "B"
    }
    else
    {
        grade= "F"
    }
    console.log(grade);
   } 

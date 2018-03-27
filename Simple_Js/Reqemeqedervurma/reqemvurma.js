var n =Number(prompt("Ededi daxil edin:"));
var h=1;


for(m=1;m<=n;m++){
    document.write("<h1 style='background:black;color:gold;margin-top:0px;text-align:center;border:2px solid gold; width:auto;box-shadow:5px grey;border-radius:20px' >" +h+"*"+m+"="+m*h+"</h1>");
    var h=m*h;
  
  
}

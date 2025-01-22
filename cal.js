
let textin=document.querySelector("#textin");
let btnnum=document.querySelectorAll(".btn");
let str="";


 btnnum.forEach((e)=>{
 e.addEventListener("click",(event)=>{

let value=event.target.innerText;
if(value=="="){
    let res=eval(str);
    console.log(res);
    textin.value=""+res;
}
else if(value=="AC"){
str="";
textin.value=str;
}
else if(value=="DEL"){
   str=str.slice(0,str.length-1);
   textin.value=str;

}
else{
    str+=value;
    textin.value=str;
}
})
})


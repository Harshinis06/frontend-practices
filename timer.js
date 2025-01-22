let start=document.getElementById('start');
let stops=document.getElementById('stop');
let restart=document.getElementById('restart');

let millis=document.getElementById('millisec');
let sec=document.getElementById('sec');
let min=document.getElementById('min');
let hrs=document.getElementById('hrs');

let mils=0;
let secs=0;
let mins=0;
let hours=0;
let myIntervel=null;
let flag=false;

function starts(){
   mils=mils+1;
   millis.innerText=mils;

if(mils===1000){
   secs=secs+1;
   sec.innerText=zero(secs);
   mils=0;
   if(secs===60){
    mins=mins+1;
  min.innerText=zero(mins);
  secs=0;
  if(mins===60){
   hours=hours+1;
   hrs.innerText=zero(hours);
     mins=0;
  }
   }
}
}
start.addEventListener('click',()=>{
   if(!flag){
  myIntervel=setInterval(starts)
  flag=true;
}
})

stops.addEventListener('click',()=>{
   clearInterval(myIntervel)
})

function resetwatch(){
   mils=0;
   secs=0;
  mins=0;
  hours=0;
flag=false;
  millis.innerText="00:";
  sec.innerText="00:";
  min.innerText="00";
  hrs.innerText="00";
}
restart.addEventListener('click',()=>{
   resetwatch();
})
function zero(digit){
if(digit<10){
   return "0"+digit;
}
else{
return digit;
}
}
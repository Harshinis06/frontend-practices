let check=document.getElementById("check");
let pass=document.getElementById("pass");

function checks(){
let val=pass.getAttribute('type');
if(val==='password'){
pass.setAttribute('type','text');
}
else{
pass.setAttribute('type','password');
}
}

check.addEventListener('click',checks);
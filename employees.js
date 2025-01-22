let employees=[
    {empno:101,ename:'harshini',salary:100000,gender:'female',active:'true'},
    {empno:102,ename:'hem',salary:100000,gender:'male',active:'true'},
    {empno:103,ename:'sara',salary:100000,gender:'female',active:'true'},
    {empno:104,ename:'laksh',salary:100000,gender:'male',active:'true'},
    {empno:105,ename:'harshini',salary:100000,gender:'female',active:'true'},
    {empno:105,ename:'murugesh',salary:100000,gender:'male',active:'true'},
    {empno:105,ename:'kamatchi',salary:100000,gender:'female',active:'true'}

];

let allemp=document.getElementById('all_emp');
let alldatas=document.getElementById('emp_data');


function displayemp(employees){
    let str='';
    for(let employee of employees)
    {
        str+=`<tr>
            <td>${employee.empno}</td>
            <td>${employee.ename}</td>
            <td>${employee.salary}</td>
            <td>${employee.gender}</td>
            <td>${employee.active}</td></tr>`;
    }



    let alldatas=document.getElementById('emp_data')
alldatas.innerHTML=str;
};

allemp.addEventListener('click',function(){
    displayemp(employees);
});

let males=document.getElementById('males');

let maleemp=employees.filter((emp)=>{
     return emp.gender==='male';
       
});
males.addEventListener('click',function(){
    displayemp(maleemp);
});

let females=document.getElementById('female');

let femalemp=employees.filter((emp)=>{
    return emp.gender==='female';
});
females.addEventListener('click',()=>{
    displayemp(femalemp);
})

let empName=document.getElementById('emp_name');

empName.addEventListener('keyup',()=>{
    let enteredNames=empName.value;
    let emps=searchBox(enteredNames,employees);
    displayemp(emps);
})
function searchBox(vals,emp){
   let val= vals.toUpperCase().trim();
   let filteredemps=[];
   for(let emps of emp){
    oName=emps.ename.toUpperCase().trim();
    if(oName.includes(val)){
        filteredemps.push(emps);
    }
   }
   return filteredemps;
}

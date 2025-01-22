let input =document.getElementById("input-box");
let addbtn=document.getElementById("btn");
let display=document.querySelector("#display");
//console.log(input,addbtn,display);
let deleteAllBtn = document.getElementById("delete-all-btn");

let todoTask=[];

let editIndex;
let checkedTasks = new Set();
printing();


addbtn.addEventListener("click",()=>{
  let inputText=input.value;
if(editIndex==undefined){//addblock
  if(!inputText){         //by default is null -->truthy//so we make as false
      alert("first enter the text")
  }
  else{
      todoTask.unshift(inputText);//unshift used to pushing the array from starting in the array
      localStorage.setItem("todo",JSON.stringify(todoTask))
        console.log(todoTask);
        printing()
  }
}
else{//editblock
   todoTask=todoTask.map((e,i)=>{
    if(i==editIndex){
      return input.value;
    }
    else{
      return e;
    }
   })
   localStorage.setItem("todo",JSON.stringify(todoTask))
   printing();
   editIndex=undefined;
   addbtn.innerText="ADD";
   addbtn.style.background="gray";
}
})
 //printing function
 function printing(){
 
 let str="";
 todoTask=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):todoTask;
 todoTask.forEach((ele,i)=>{
  str+=`<div class="card col-3 bg-light mt-3 flex-grow-1" >
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
              <p class="card-text text-danger mb-0">${ele}</p>
              <input type="checkbox" class="form-check-input" onchange="toggleCheck(${i}, this)">
          </div>
        <button type="button" class="btn btn-danger" onclick="deleteTask(${i})"  >Delete</button>
        <button type="button" class="btn btn-warning" onclick="editTask(${i})" >Edit</button>
      </div>
 
    </div>`
 })
 display.innerHTML=str;
 input.value="";
 }

 //deleting
 function deleteTask(index){
  todoTask.splice(index,1)
  console.log(todoTask);
  localStorage.setItem("todo",JSON.stringify(todoTask))
  printing();
 }



deleteAllBtn.addEventListener("click", () => {
  todoTask = todoTask.filter((index) => !checkedTasks.has(index));
  localStorage.setItem("todo", JSON.stringify(todoTask));
  checkedTasks.clear();
  printing();
});



//edit
function editTask(index){
let editData=todoTask.find((e,i)=>i==index)
input.value=editData;
editIndex=index;
addbtn.innerText="UPDATE";
addbtn.style.backgroundColor="orange";
}

function toggleCheck(index, checkbox) {
if (checkbox.checked) {
  checkedTasks.add(index);
} else {
  checkedTasks.delete(index);
}
}
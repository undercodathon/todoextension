var toDoList = [];

const task = document.getElementById('task-text-box');
var count = 0;

const unorderedListElement = document.getElementById('unordered-list-element') 

const taskBtn = document.getElementById('task-btn');

const tasksFromStorage = JSON.parse(localStorage.getItem('myTasks')) 

if(tasksFromStorage){
    toDoList = tasksFromStorage
    render()
}
var input = document.getElementById('task-text-box')
input.addEventListener('keydown',function(event){

    if (event.key === 'Enter') {
        toDoList.push(task.value);
        console.log(toDoList);
        task.value ="";
        localStorage.setItem('myTasks',JSON.stringify(toDoList))
        render();
    }

})
taskBtn.addEventListener('click',function(){


    toDoList.push(task.value);
    console.log(toDoList);
    task.value ="";
    localStorage.setItem('myTasks',JSON.stringify(toDoList))
    render();
})

function render(){
    let taskList= '';
    for(let i=0 ; i<toDoList.length; i++)
    {
        taskList +=`<li id='to-find'>
                       <span id='created-task'> ${toDoList[i]} </span> 
                    </li>`;

              
    }
unorderedListElement.innerHTML = taskList  
}
let test = []


document.querySelector('.all').addEventListener('click',function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        test.push(tabs[0].url)
        
    })

    localStorage.clear()
    toDoList= []
    //toDoList.pop()
    console.log(toDoList);
    render()

})

document.querySelector('.first').addEventListener('click',function(){


    // toDoList.shift()
    taskToShift = JSON.parse(localStorage.getItem('myTasks'));
    taskToShift.shift();
    toDoList = taskToShift;
    localStorage.setItem('myTasks',JSON.stringify(taskToShift))
    console.log(toDoList);
    render()

})

document.querySelector('.last').addEventListener('click',function(){


    // toDoList.shift()
    taskToShift = JSON.parse(localStorage.getItem('myTasks'));
    taskToShift.pop();
    toDoList = taskToShift;
    localStorage.setItem('myTasks',JSON.stringify(taskToShift))
    console.log(toDoList);
    render()

})
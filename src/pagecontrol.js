import { domGenModule, mainContBox } from "./index.js";

let testObjArr = [{
    project_name: "Test Project",
    date_entry: "12/30/2022",
    time_entry: "07:30",
    task_num: "2",
    tasks: {
        0: "Take the trash out test",
        1: "Brush Teeth"
    },
    prio: 0,
    id: 0
},
{
    project_name: "Test Project",
    date_entry: "12/18/2022",
    time_entry: "07:30",
    task_num: "2",
    tasks: {
        0: "Take the trash out test",
        1: "Brush Teeth"
    },
    prio: 0,
    id: 1
}
]

const taskFactory = (formData) => {
    let project_name = formData.project_name.value;
    let date_entry = formData.date_entry.value;
    let time_entry = formData.time_entry.value;
    let task_num = formData.task_num.value;
    let tasks = {};
    let prio = 0;    
    let id = idGen(testObjArr);

    taskArr(task_num, tasks, formData)

    return { project_name, date_entry, time_entry, task_num, tasks, prio, id }
}

let taskNum = () => {
    let taskBox = document.querySelector(".task_box");
    let valueEle = document.querySelector("#task_num");

    let taskNum = valueEle.value;
    taskBox.textContent = "";

    for (let i = 0; i < taskNum; i++){
        let newTaskLabel = domGenModule.makeEle("label", `Task ${i + 1}`);
        let newTaskInput = domGenModule.makeEle("input", [["type", "text"], ["name", `task_${i + 1}`], ["id", `task_${i + 1}`], ["required", ""]]);

        taskBox.appendChild(newTaskLabel);
        taskBox.appendChild(newTaskInput);
    }

    return;
}

let formController = () => {
    let form = document.querySelector(".add_task_form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        newDomTask(form);
        console.log(testObjArr);
        
        formHide();
        formRemove();
    });

    return;
}

let taskControl = (taskEle) => {
    taskEle.addEventListener("click", (event) => {
        let mainElement = event.target.parentElement.parentElement.parentElement;

        removeTaskObj(mainElement.id);
        mainElement.remove();
    })

    return;
}

let clearTasks = () => {
    let taskBox = document.querySelector(".main_content")
    taskBox.innerHTML = "";

    return;
}

let taskArr = (taskNum, tasks, data) => {
    for (let i = 0; i < taskNum; i++) {
        tasks[i] = data[`task_${i + 1}`].value;
    }

    return;
}

let dateDiffInDays = (dateA, dateB) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

let filterTasksDays = (objDate) => {
    let today = new Date();
    let compareDate = new Date(objDate);

    return dateDiffInDays(today, compareDate);
}

let showTodaysTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 1);

    return newArr;
}

let showWeekTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 7);

    return newArr;
}

let showMonthTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 30);

    return newArr;
}

let showAllTasks = (objArr) => {
    return objArr
}


let idGen = (objArr) => {
    if (objArr.length === 0){
        return 0;
    }

    let lastObj = objArr.slice(-1);
    
    return lastObj[0].id + 1;
}

let newDomTask = (obj) => {
    let newObj = taskFactory(obj);

    testObjArr.push(newObj);        
    mainContBox(testObjArr.slice(-1));

    return;
}

let formShow = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "flex";
    
    return;
}

let formHide = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "none";

    return;
}

let formRemove = () => {
    let form = document.querySelector(".form_box");

    form.remove();

    return;
}

let removeTaskObj = (eleId) => {    
    return testObjArr = testObjArr.filter(test => test.id != eleId)   
}

let swapImg = (element, imgOne, imgTwo) => {
    let swapImgFun = function (e) {
        let tarEle = e.srcElement;
        
        if (tarEle.src === imgOne) {
            tarEle.src = imgTwo;
        } else if (tarEle.src === imgTwo) {
            tarEle.src = imgOne;
        }
    }

    return element.addEventListener("click", swapImgFun);
}

let switchClass = (element, classA, classB) => {
    let switchClass = (t) => {
        if (t.srcElement.classList[0] === classA){
            t.srcElement.classList.remove(classA);
            t.srcElement.classList.add(classB);
        } else if (t.srcElement.classList[0] === classB) {
            t.srcElement.classList.remove(classB);
            t.srcElement.classList.add(classA);
        }
    }

    return element.addEventListener("click", switchClass);
}


export { formController, swapImg, switchClass, formShow, formHide,
         formRemove, taskNum, taskControl, testObjArr, showTodaysTasks,  
        showWeekTasks, showMonthTasks, showAllTasks, clearTasks };
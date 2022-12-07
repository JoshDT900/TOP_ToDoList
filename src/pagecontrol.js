import { domGenModule, mainContBox } from "./index.js";
import format from 'date-fns/format';
import { split } from "lodash";

let testObjArr = [{
    project_name: "Test Project",
    date_entry: "11/09/2022",
    time_entry: "7:30pm",
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
    date_entry: "11/09/2022",
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

let taskArr = (taskNum, tasks, data) => {
    for (let i = 0; i < taskNum; i++) {
        tasks[i] = data[`task_${i + 1}`].value;
    }

    return;
}

// let dateToInt = (dateStr) => {
//     let dateArr = split(dateStr, ":").join("")
//     let newDate = parseInt(dateArr);
//     console.log(newDate);

//     return newDate;
// }

// console.log(format(dateToInt("12:45"), "HH:mmaaa"))

let idGen = (objArr) => {
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


export { formController, swapImg, switchClass, formShow, formHide, formRemove, taskNum, taskControl, testObjArr };
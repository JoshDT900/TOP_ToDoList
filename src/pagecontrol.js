import { domGenModule, testObjArr, mainContBox } from "./index.js";

const taskFactory = (formData) => {
    let project_name = formData.project_name.value;
    let date_entry = formData.date_entry.value;
    let time_entry = formData.time_entry.value;
    let task_num = formData.task_num.value;
    let tasks = {};
    let prio = 0;    
    
    let lastObj = testObjArr.slice(-1);
    let id = lastObj[0].id + 1;

    for (let i = 0; i < task_num; i++) {
        tasks[i] = formData[`task_${i + 1}`].value;
    }

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
    let form = document.querySelector(".add_task_form")

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        newDomTask(form);
        console.log(testObjArr);
        
        formHide();
        formRemove();
    });
}

let newDomTask = (obj) => {
    let newObj = taskFactory(obj);

    testObjArr.push(newObj);        
    mainContBox(testObjArr.slice(-1));
}

let formShow = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "flex";    
}

let formHide = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "none";  
}

let formRemove = () => {
    let form = document.querySelector(".form_box");

    form.remove();
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

    element.addEventListener("click", swapImgFun);
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

    element.addEventListener("click", switchClass);
}


export { formController, swapImg, switchClass, formShow, formHide, formRemove, taskNum };
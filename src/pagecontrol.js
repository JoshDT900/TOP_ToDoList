import { format } from "date-fns";
import { domGenModule, mainContBox, formBox } from "./index.js";
import { taskFactory } from "./objectfuncs.js";
import { dataObjArr, saveProjLoc } from "./datafile.js";
import { formHide, formRemove, formShow } from "./displayfuncs.js";

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

let formatDate = (obj) => {
    let dateArr = obj.date_entry.split("-").reverse();
    dateArr.push(obj.time_entry.split(":"));    

    let formatedDate = format(new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0], parseFloat(dateArr[3][0]), parseFloat(dateArr[3][1])), "MMM dd yyyy - p");

    return formatedDate;
}

let newDomTask = (obj) => {
    let newObj = taskFactory(obj);

    dataObjArr.push(newObj);        
    mainContBox(dataObjArr.slice(-1));
    saveProjLoc(dataObjArr)

    return;
}

let removeTaskObj = (eleId) => {
    console.log(eleId);
    let newObjArr = dataObjArr.filter(test => test.id != eleId);
    console.log("item removed");

    return saveProjLoc(newObjArr); 
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

let editTask = (obj, taskId) => {
    formBox();
    formShow();
    

    let submitBtn = document.querySelector(".submitBtn");
    submitBtn.innerHTML = "Save";

    let form = document.querySelector(".add_task_form");
    
    let holdObj = obj.filter(obj => obj.id === taskId);    

    let projName = document.querySelector("#project_name");
    projName.value = holdObj[0].project_name;    

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        newDomTask(form);
        
        formHide();
        formRemove();
    });    

    return;    
}


export { formController, switchClass, taskNum, taskControl, dataObjArr, formatDate, editTask };
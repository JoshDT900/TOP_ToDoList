import { domGenModule } from "./index.js";

const taskFactory = () => {
    
    return {}
}

const testObj = taskFactory({test: "works"})

console.log(testObj);

let taskNum = () => {
    let taskBox = document.querySelector(".task_box")
    let valueEle = document.querySelector("#task_num")

    let taskNum = valueEle.value
    taskBox.textContent = "";

    for (let i = 0; i < taskNum; i++){
        let newTaskLabel = domGenModule.makeEle("label", `Task ${i + 1}`)
        let newTaskInput = domGenModule.makeEle("input", [["type", "text"], ["name", `task_${i + 1}`], ["id", `task_${i + 1}`], ["required", ""]])

        taskBox.appendChild(newTaskLabel)
        taskBox.appendChild(newTaskInput)
    }

    return;
}

let formController = () => {
    let form = document.querySelector(".add_task_form")

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        var formData = new FormData(form);

        for (var p of formData) {
            let key = p[0];
            let val = p[1];

            console.log(key, val)
        }
        
        formHide();
        formRemove();
    });
}

let formShow = () => {
    let formDisplay = document.querySelector(".form_wrap")

    formDisplay.style.display = "flex"    
}

let formHide = () => {
    let formDisplay = document.querySelector(".form_wrap")

    formDisplay.style.display = "none"  
}

let formRemove = () => {
    let form = document.querySelector(".form_box")

    form.remove()
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

    element.addEventListener("click", swapImgFun)
}

let switchClass = (element, classA, classB) => {
    let switchClass = (t) => {
        if (t.srcElement.classList[0] === classA){
            t.srcElement.classList.remove(classA)
            t.srcElement.classList.add(classB)
        } else if (t.srcElement.classList[0] === classB) {
            t.srcElement.classList.remove(classB)
            t.srcElement.classList.add(classA)
        }
    }

    element.addEventListener("click", switchClass)
}


export { formController, swapImg, switchClass, formShow, formHide, formRemove, taskNum }
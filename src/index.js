import './style.css';
import { formController, switchClass, taskNum, taskControl, dataObjArr,  formatDate } from './pagecontrol.js';
import { headerImgFile, profileImageFile, projBtnImageFile, calendarAllImg,
         calendarMonthImg, calendarTodayImg, calendarWeekImg, gitLogoImg,
         delTaskImg, completedTaskImg, editTaskImg, completedTaskImgFilled } from './images.js'
import { swapImg, formRemove, formHide, formShow, showAllTasks, showMonthTasks, showWeekTasks, showTodaysTasks,
         clearTasks } from './displayfuncs.js';
import { loadData } from './datafile';


const domGenModule = (function() {
    let body = document.querySelector("body");

    //Method for making new elements. Accepts 3 args. First accepts a string, 2nd is either an Array, Nested Array, or String, and 3rd accepts a string.
    //2nd arg sets attributes for elements if an array or nested array, or text content if it's a string.
    //Accepts a 3rd argument only if 2nd argument isn't an array or nested array.
    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        }

        let newEle = document.createElement(`${argArr[0]}`)        

        if (argArr.length >= 2 && typeof(argArr[1]) === "object") {
            if(typeof(argArr[1][0]) === "object") {
                for (let i in argArr[1]){
                    let tempArr = [...argArr[1][i]];

                    newEle.setAttribute(...tempArr);
                }
            } else {
                newEle.setAttribute(...argArr[1]);
            }            
            
            if (argArr.length === 3) {
                if (typeof(argArr[2]) === 'string') {
                    newEle.textContent = argArr[2];
                } else {
                    return alert("Invalid Argument Type. The third argument must be a string");
                }
            }
        } else if (argArr.length === 2 && typeof(argArr[1]) === "string") {
            newEle.textContent = argArr[1];
            return newEle; 
        } else if (argArr.length === 1) {
            return newEle;
        } else {
            return alert("The second argument accepts an array of arrays containing 2 strings or an array of 2 strings.");
        }

        return newEle;   
    }

    return { makeEle, body };
})();

let domGenMain = () => {
    let mainWrap = domGenModule.makeEle("div", ["class", "main_wrap"]);
    domGenModule.body.appendChild(mainWrap);

    let headerEle = domGenModule.makeEle("header", ["class", "head_page"]);
    mainWrap.appendChild(headerEle);

    let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav"]);
    mainWrap.appendChild(sideNavEle);

    let mainConEle = domGenModule.makeEle("div", ["class", "main_content"]);
    mainWrap.appendChild(mainConEle);

    let formWrapEle = domGenModule.makeEle("div", ["class", "form_wrap"]);
    mainWrap.appendChild(formWrapEle);    

    return mainWrap;
};

let headerEleBox= () => {
    let headerEle = document.querySelector(".head_page");

    let headImg = domGenModule.makeEle("img", [["class", "nav_logo"], ["src", headerImgFile]]);
    headerEle.appendChild(headImg);

    let h1Ele = domGenModule.makeEle("h1", "My To Do List");
    headerEle.appendChild(h1Ele);

    let profBoxEle = domGenModule.makeEle("div", ["class", "profile_box"]);
    headerEle.appendChild(profBoxEle);

    return headerEle;
}

let profileBox = () => {
    let profBoxEle = document.querySelector(".profile_box");

    let projBtnEle = domGenModule.makeEle("div", ["class", "add_proj_btn"]);
    profBoxEle.appendChild(projBtnEle);

    let projBtnDiv = domGenModule.makeEle("div", "Add a new project");
    projBtnEle.appendChild(projBtnDiv);
    
    projBtnEle.addEventListener("click", formShow)
    projBtnEle.addEventListener("click", formBox)

    let projBtnImg = domGenModule.makeEle("img", [["src", projBtnImageFile], ["alt", "add note icon"]]);
    projBtnEle.appendChild(projBtnImg);

    let projBtnProfile = domGenModule.makeEle("img", [["src", profileImageFile], ["alt", "profile icon"]]);
    profBoxEle.appendChild(projBtnProfile);

    return profBoxEle;
}

let sideNavBox = () => {
    let sideNav = document.querySelector(".side_nav");

    let navClassArr = ["today_item", "week_item", "month_item", "all_item"];
    let navPText = ["Today's Projects", "Projects for the next 7 days", "Projects for the next 30 days", "All Projects"];
    let imgArr = [calendarTodayImg, calendarWeekImg, calendarMonthImg, calendarAllImg];
    let eventArr = [showTodaysTasks, showWeekTasks, showMonthTasks, showAllTasks]

    for (let i in navClassArr) {
        let newEle = domGenModule.makeEle("div", ["class", navClassArr[i]]);

        let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav_item"]);
        newEle.appendChild(sideNavEle);

        let pEle = domGenModule.makeEle("p", navPText[i]);
        sideNavEle.appendChild(pEle);

        let imgEle = domGenModule.makeEle("img", ["src", imgArr[i]]);
        sideNavEle.appendChild(imgEle);

        newEle.addEventListener("click", () => {
            let eventFunc= eventArr[i];
            
            clearTasks();
            mainContBox(eventFunc(dataObjArr));
        })

        sideNav.appendChild(newEle);
    }

    let sideFootEle = domGenModule.makeEle("div", ["class", "side_nav_footer"]);
    let footEleItem = domGenModule.makeEle("div", ["class", "side_nav_item side_nav_footer_item"]);
    let aFootEle =  domGenModule.makeEle("a", [["href", "https://github.com/JoshDT900"], ["target", "#"]]);
    let imgFootEle = domGenModule.makeEle("img", [["src", gitLogoImg], ["alt", "GitHub logo of Mark the cat"]]);
    let pFootEle = domGenModule.makeEle("p", "Created by - David T.");

    aFootEle.appendChild(imgFootEle);
    footEleItem.appendChild(aFootEle);
    footEleItem.appendChild(pFootEle);
    sideFootEle.appendChild(footEleItem);
    sideNav.appendChild(sideFootEle);

    return sideNav;
}

let formBox = () => {
    let formWrap = document.querySelector(".form_wrap")

    let formBoxEle = domGenModule.makeEle("div", ["class", "form_box"])
    let formEle = domGenModule.makeEle("form", [["class", "add_task_form"],["action", " "],["method", "post"]])    
    
    let formEleClassArr = ["proj_name_box", "date_box", "time_box", "task_num_box", "task_box", "submit_box"]

    for (let i = 0; i < formEleClassArr.length; i++) {
        let newEle = domGenModule.makeEle("div", ["class", formEleClassArr[i]])
        

        if (formEleClassArr[i] === "proj_name_box"){
            let labelEle = domGenModule.makeEle("label", ["for", "project_name"], "Project Name *")
            let inpEle = domGenModule.makeEle("input", [["type", "text"], ["id", "project_name"], ["name", "project_name"],
             ["placeholder", "My New Project"], ["minlength", "4"], ["maxlength", "30"],["required", ""]]);

            newEle.appendChild(labelEle);
            newEle.appendChild(inpEle);
                                                        
        } else if (formEleClassArr[i] === "date_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "date_entry"], "Date *")
            let inpEle = domGenModule.makeEle("input", [["type", "date"], ["name", "date_entry"], ["id", "date_entry"], ["required", ""]])

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
        } else if (formEleClassArr[i] === "time_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "time_entry"], "Time *")
            let inpEle = domGenModule.makeEle("input", [["type", "time"], ["name", "time_entry"], ["id", "time_entry"], ["required", ""]])

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
        } else if (formEleClassArr[i] === "task_num_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "task_num"], "Number of tasks *")
            let inpEle = domGenModule.makeEle("input", [["type", "number"], ["name", "task_num"], ["id", "task_num"], ["min", "1"], ["max", "10"], ["value", "1"]])
            let btnEle = domGenModule.makeEle("button", ["type", "button"], "Confirm")

            btnEle.addEventListener("click", taskNum)

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
            newEle.appendChild(btnEle)
        } else if (formEleClassArr[i] === "submit_box") {
            let subBtnEle = domGenModule.makeEle("button", ["type", "submit"], "Add Project")
            let cancelBtnEle = domGenModule.makeEle("button", ["type", "button"], "Cancel")

            subBtnEle.addEventListener("click", formController)
            cancelBtnEle.addEventListener("click", () => {
                formHide()
                formRemove()
            })

            newEle.appendChild(subBtnEle)
            newEle.appendChild(cancelBtnEle)
        } else if (formEleClassArr[i] === "task_box") {
            let newTaskLabel = domGenModule.makeEle("label", `Task 1`)
            let newTaskInput = domGenModule.makeEle("input", [["type", "text"], ["name", `task_1`], ["id", `task_1`], ["required", ""]])

            newEle.appendChild(newTaskLabel)
            newEle.appendChild(newTaskInput)
        }
        
        formEle.appendChild(newEle)
    }

    formBoxEle.appendChild(formEle)
    formWrap.appendChild(formBoxEle)

    return formBoxEle;
}

//Generates DOM tasks from an array of Objects.
let mainContBox = (arr) => {
    let mainContEle = document.querySelector(".main_content");

    for (let obj of arr) {
        let todoItem = domGenModule.makeEle("div", [["class", "todo_item"], ["id", `${obj.id}`]]);
        mainContEle.appendChild(todoItem);

        switchClass(todoItem, "todo_item", "todo_item_full")
        
        let taskEle = domGenModule.makeEle("div", [["class", "todo_task"]], obj.project_name);
        todoItem.appendChild(taskEle);

        let todoBody = domGenModule.makeEle("div", ["class", "todo_body"]);
        let todoBodyList = domGenModule.makeEle("ul");

        for (let j = 0; j < obj.task_num; j++){                   
            let taskInputEle = domGenModule.makeEle("input", [["type", "checkbox"], ["name", `task_${j}`], ["id", `task_id_${j}`]]);
            let taskLabelEle =  domGenModule.makeEle("label", ["for", `task_${j}`], obj.tasks[j]);

            todoBodyList.appendChild(taskInputEle);
            todoBodyList.appendChild(taskLabelEle);
        }

        todoBody.appendChild(todoBodyList);
        todoItem.appendChild(todoBody);

        let timeEle = domGenModule.makeEle("div", ["class", "todo_time"], formatDate(obj));
        todoItem.appendChild(timeEle);

        let taskBtnBoxEle = domGenModule.makeEle("div", ["class", "todo_btns"]);
        todoItem.appendChild(taskBtnBoxEle);

        let btnImgArr = [completedTaskImg, editTaskImg, delTaskImg];
        let btnImgAlt = ["task done button", "edit task button", "remove task button"];
        let btnClassArr = ["todo_completed", "todo_edit", "todo_delete"];
        for (let i = 0; i < btnImgArr.length; i++) {
            let newBtn = domGenModule.makeEle("div", ["class", btnClassArr[i]]);
            let btnImgEle = domGenModule.makeEle("img", [["src", btnImgArr[i]], ["alt", btnImgAlt[i]], ["class", `task_image${i}`]]);

            if (btnClassArr[i] === "todo_delete") {
                taskControl(newBtn)
            }

            swapImg(btnImgEle, completedTaskImg, completedTaskImgFilled)

            newBtn.appendChild(btnImgEle);
            taskBtnBoxEle.appendChild(newBtn);
        };
        
    }    

    return mainContEle;
}

(function() {    
    domGenMain();
    headerEleBox();
    profileBox();
    sideNavBox();

    loadData(localStorage)
    mainContBox(showTodaysTasks(dataObjArr));    ;
})();


export { domGenModule, dataObjArr, mainContBox }


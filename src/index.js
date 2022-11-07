import './style.css';
import { headerImgFile, profileImageFile, projBtnImageFile, calendarAllImg,
         calendarMonthImg, calendarTodayImg, calendarWeekImg, gitLogoImg } from './images.js'

const domGenModule = (function() {
    let body = document.querySelector("body")

    const makeEle = function() {
        let argArr = [...arguments]

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ")
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

    return { makeEle, body }
})();

let domGenMain = () => {   

    let mainWrap = domGenModule.makeEle("div", ["class", "main_wrap"])
    domGenModule.body.appendChild(mainWrap)

    let headerEle = domGenModule.makeEle("header", ["class", "head_page"])
    mainWrap.appendChild(headerEle)

    let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav"])
    mainWrap.appendChild(sideNavEle)

    let mainConEle = domGenModule.makeEle("div", ["class", "main_content"])
    mainWrap.appendChild(mainConEle)

    let formWrapEle = domGenModule.makeEle("div", ["class", "form_wrap"])
    mainWrap.appendChild(formWrapEle)
    // let formBoxEle = domGenModule.makeEle("div", ["class", "form_box"])
    // let formEle = domGenModule.makeEle("form", [["class", "add_task_form"],["action", ""],["method", "post"]])

    // formWrapEle.appendChild(formBoxEle)
    // formBoxEle.appendChild(formEle)

    return mainWrap;
};

let headerEleBox= () => {
    let headerEle = document.querySelector(".head_page")

    let headImg = domGenModule.makeEle("img", [["class", "nav_logo"], ["src", headerImgFile]])
    headerEle.appendChild(headImg)

    let h1Ele = domGenModule.makeEle("h1", "My To Do List")
    headerEle.appendChild(h1Ele)

    let profBoxEle = domGenModule.makeEle("div", ["class", "profile_box"])
    headerEle.appendChild(profBoxEle);

    return headerEle;
}

let profileBox = () => {
    let profBoxEle = document.querySelector(".profile_box")

    let projBtnEle = domGenModule.makeEle("div", ["class", "add_proj_btn"])
    profBoxEle.appendChild(projBtnEle)

    let projBtnDiv = domGenModule.makeEle("div", "Add a new project")
    projBtnEle.appendChild(projBtnDiv)

    let projBtnImg = domGenModule.makeEle("img", [["src", projBtnImageFile], ["alt", "add note icon"]])
    projBtnEle.appendChild(projBtnImg)

    let projBtnProfile = domGenModule.makeEle("img", [["src", profileImageFile], ["alt", "profile icon"]])
    profBoxEle.appendChild(projBtnProfile)

    return profBoxEle;
}

let sideNavBox = () => {
    let sideNav = document.querySelector(".side_nav")

    let navClassArr = ["today_item", "week_item", "month_item", "all_item"]
    let navPText = ["Today's Projects", "This Week's Projects", "This Month's Projects", "All Projects"]
    let imgArr = [calendarTodayImg, calendarWeekImg, calendarMonthImg, calendarAllImg]

    for (let i in navClassArr) {

        let newEle = domGenModule.makeEle("div", ["class", navClassArr[i]])

        let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav_item"])
        newEle.appendChild(sideNavEle)

        let pEle = domGenModule.makeEle("p", navPText[i])
        sideNavEle.appendChild(pEle)

        let imgEle = domGenModule.makeEle("img", ["src", imgArr[i]])
        sideNavEle.appendChild(imgEle)

        sideNav.appendChild(newEle)
    }

    let sideFootEle = domGenModule.makeEle("div", ["class", "side_nav_footer"])
    let footEleItem = domGenModule.makeEle("div", ["class", "side_nav_item side_nav_footer_item"])
    let aFootEle =  domGenModule.makeEle("a", [["href", "https://github.com/JoshDT900"], ["target", "#"]])
    let imgFootEle = domGenModule.makeEle("img", [["src", gitLogoImg], ["alt", "GitHub logo of Mark the cat"]])
    let pFootEle = domGenModule.makeEle("p", "Created by - David T.")

    aFootEle.appendChild(imgFootEle)
    footEleItem.appendChild(aFootEle)
    footEleItem.appendChild(pFootEle)
    sideFootEle.appendChild(footEleItem)
    sideNav.appendChild(sideFootEle)

    return sideNav;
}

let testObjArr = [{
    project_name: "Test Project",
    date_entry: "11/09/2022",
    time_entry: "7:30pm",
    task_num: 1,
    task_1: "Take the trash out test.",
    prio: 0
}]

let mainContBox = (arr) => {
    let mainContEle = document.querySelector(".main_content")

    for (let obj of arr) {
        let todoItem = domGenModule.makeEle("div", ["class", "todo_item"])
        mainContEle.appendChild(todoItem)
        
        let taskEle = domGenModule.makeEle("div", ["class", "todo_task"], obj.project_name)
        todoItem.appendChild(taskEle)

        let timeEle = domGenModule.makeEle("div", ["class", "todo_time"], obj.time_entry)
        todoItem.appendChild(timeEle)
        
    }

    

    return mainContEle

}

(function() {    
    domGenMain();
    headerEleBox();
    profileBox();
    sideNavBox();
    mainContBox(testObjArr);
})();


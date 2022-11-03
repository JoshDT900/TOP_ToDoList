import './style.css';
import HeaderImg from "/home/josh/Documents/repos/TOP_ToDoList/src/description_FILL0_wght400_GRAD0_opsz48 (1).svg"
import ProjBtnImage from "/home/josh/Documents/repos/TOP_ToDoList/src/add_FILL0_wght400_GRAD0_opsz48.svg"
import ProfileImage from "../src/person_FILL0_wght400_GRAD0_opsz48 (2).svg"

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

    return mainWrap;
};

let headerEleContent = () => {
    let headerEle = document.querySelector(".head_page")

    let headImg = domGenModule.makeEle("img", ["class", "nav_logo"])
    headImg.setAttribute("src", HeaderImg)
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

    let projBtnImg = domGenModule.makeEle("img", [["src", ProjBtnImage], ["alt", "add note icon"]])
    projBtnEle.appendChild(projBtnImg)

    let projBtnProfile = domGenModule.makeEle("img", [["src", ProfileImage], ["alt", "profile icon"]])
    profBoxEle.appendChild(projBtnProfile)

    return profBoxEle;
}

(function() {
    domGenMain();
    headerEleContent();
    profileBox();

})();


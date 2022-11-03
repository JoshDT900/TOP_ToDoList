import './style.css';
import HeaderImg from "/home/josh/Documents/repos/TOP_ToDoList/src/description_FILL0_wght400_GRAD0_opsz48 (1).svg"

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
                    return alert("The third argument must be a string");
                }
            }
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
}


(function() {
    domGenMain();
    headerEleContent();

})();


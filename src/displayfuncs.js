

let clearTasks = () => {
    let taskBox = document.querySelector(".main_content");
    
    return taskBox.innerHTML = "";
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
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 1 && filterTasksDays(obj.date_entry) >= 0);

    return newArr;
}

let showWeekTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 7 && filterTasksDays(obj.date_entry) >= 0);

    return newArr;
}

let showMonthTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry) < 30 && filterTasksDays(obj.date_entry) >= 0);

    return newArr;
}

let showAllTasks = (objArr) => {
    return objArr
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

export {swapImg, formRemove, formHide, formShow, showAllTasks, showMonthTasks, showWeekTasks, showTodaysTasks,
    clearTasks }
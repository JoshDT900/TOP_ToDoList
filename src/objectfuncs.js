import { dataObjArr } from "./pagecontrol.js";

const taskFactory = (formData) => {
    let project_name = formData.project_name.value;
    let date_entry = formData.date_entry.value;
    let time_entry = formData.time_entry.value;
    let task_num = formData.task_num.value;
    let tasks = {};
    let prio = 0;    
    let id = idGen(dataObjArr);
    let complete = false;    

    taskArr(task_num, tasks, formData);

    return { project_name, date_entry, time_entry, task_num, tasks, prio, id, complete };
}

let taskArr = (taskNum, tasks, data) => {
    for (let i = 0; i < taskNum; i++) {
        tasks[i] = data[`task_${i + 1}`].value;
    }

    return;
}

let idGen = (objArr) => {
    if (objArr.length === 0){
        return 0;
    }

    let lastObj = objArr.slice(-1);
    
    return lastObj[0].id + 1;
}

export { taskFactory }
let dataObjArr = []

let loadData = (locStor) => {
    if (locStor === null){
        return dataObjArr = [];
    } else {
        return dataObjArr = JSON.parse(locStor);
    }    
}

let saveProjLoc = (objArr) => {
    localStorage.clear("projects");
    
    localStorage.setItem("projects", JSON.stringify(objArr));

    // Refreshes session data with new local storage
    loadData(localStorage.getItem(`projects`))
   
    return;
}


export { dataObjArr, saveProjLoc, loadData } 
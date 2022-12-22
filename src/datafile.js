let dataObjArr = []

let loadData = (locStor) => {
    if (locStor.projects === undefined) {
        return dataObjArr = [];
    } else {
        return dataObjArr = JSON.parse(locStor.projects);
    }
}

let saveProjLoc = (objArr) => {
    localStorage.clear("projects");
    
    return localStorage.setItem("projects", JSON.stringify(objArr));
}

export { dataObjArr, saveProjLoc, loadData } 
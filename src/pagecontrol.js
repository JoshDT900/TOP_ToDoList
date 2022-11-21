
let formController = () => {
    let form = document.querySelector(".add_task_form")
    //Temp Event Listener to prevent refresh and preserve object data
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        var formData = new FormData(form);

        for (var p of formData) {
            let key = p[0];
            let val = p[1];

            console.log(key, val)
        }
    });
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

export { formController, swapImg }
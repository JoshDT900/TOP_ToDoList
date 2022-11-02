import './style.css';

const domGenModule = (function() {

    const makeEle = function() {
        let argArr = [...arguments]

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: makeEle('div') ")
        }

        let newEle = document.createElement(`${argArr[0]}`)        

        if (argArr.length >= 2 && argArr[1].length === 2) {
            newEle.setAttribute(...argArr[1]);
            
            if (argArr.length === 3) {
                if (typeof(argArr[2]) === 'string') {
                    newEle.textContent = argArr[2];
                } else {
                    return alert("The third argument must be a string")
                }
            }
        } else {
            return alert("The second argument must be an array of 2 strings.")
        }

        console.log(newEle);
        return newEle;
    }

    return { makeEle }
})();

domGenModule.makeEle("div", ["class", "test"], "3")


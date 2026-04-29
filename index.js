const inpEl = document.getElementById("number");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");




let clearerror;
let clearinpt;
function updateWeight() {
    if (inpEl.value <= 0 || isNaN(inpEl.value)) {
        errorEl.innerText = "error: please enter a valid input!";
        clearTimeout(clearerror);
        clearerror = setTimeout(() => {
            errorEl.innerText = "";
            inpEl.value = "";
        }, 2000);
    } else {
        resultEl.innerText = (+inpEl.value / 2.2).toFixed(2);
        clearTimeout(clearinpt)
        clearinpt = setTimeout(() => {
            inpEl.value = "";
            resultEl.innerText = "";
        }, 10000);
    }
}
inpEl.addEventListener("input", updateWeight);
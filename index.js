let incrementEl = document.getElementById("increment")
let countEl = document.getElementById("start-btn")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
let arr = []
let count = 0
let sum = 0
let counting = 0

function people() {
    count++
    incrementEl.textContent = count
}

function save(){
    counting = `${count} - `
    saveEl.textContent += counting
    //countEl.innerText = 0
    count = 0
}

function show(){
    sumEl.textContent = "Total Entries: "
    for( let i = 0; i < arr.length; i++){
        sum += arr[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
}

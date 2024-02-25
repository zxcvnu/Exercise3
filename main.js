const inputData = document.getElementById("input")
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highestTxt = document.getElementById("highest");
const lowestTxt = document.getElementById("lowest");

let arr = [];
let sum = 0;
let highest = 0;
let lowest = 0;

function pushToArr() {
    if (!(inputData.value === "")) {
        arr.push(parseInt(inputData.value));
        highest = inputData.value;
        lowest = highest;
        inputData.value = "";
    } else {
        alert("Please Input All of the Parameters!");
    }

    sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    for(let i=0; i<arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
        
        if (lowest > arr[i]) {
            lowest = arr[i];
        }
    }

    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = sum;
    highestTxt.innerHTML = highest;
    lowestTxt.innerHTML = lowest;
    console.log(arr);
}

function clearEntries() {
    inputData.value = "";
    elementTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highestTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
    arr = [];
    sum = 0;
    highest = 0;
    lowest = 0;
}
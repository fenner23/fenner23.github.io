
function calculateHourly() {
let pay = 425;
let hours = parseFloat(document.getElementById("hours").value);

// Validation
if (isNaN(pay) || isNaN(hours) || hours <= 0) {
document.getElementById("result").innerText =
"Please enter valid numbers.";
return;
}

let rate = pay * hours;

document.getElementById("result").innerHTML =
"Total Rate: $" + rate.toFixed(2);
}

// script.js

const tipForm = document.getElementById("tipForm");
const billTotal = document.getElementById("billTotal");
const tipPercentage = document.getElementById("tipPercentage");
const tipPercentageValue = document.getElementById("tipPercentageValue");
const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");

// Event listener to trigger calculation when any input changes
tipForm.addEventListener("input", calculateTip);

function calculateTip() {
    const billAmount = parseFloat(billTotal.value);
    const tipPercent = parseInt(tipPercentage.value);
    
    // Check if the Bill Total is a valid number
    if (isNaN(billAmount)) {
        alert("Please enter a valid number for the Bill Total.");
        return;
    }
    
    // Calculate tip and total bill
    const tip = (billAmount * tipPercent) / 100;
    const total = billAmount + tip;
    
    // Display the calculated values in disabled input fields
    tipPercentageValue.value = tipPercent + "%";
    tipAmount.value = tip.toFixed(2);
    totalBill.value = total.toFixed(2);
}


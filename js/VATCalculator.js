// Build VAT Calculator

function calculateVAT() {
    var grossPrice = parseFloat(document.getElementById("grossPrice").value);
    var vatRate = 0.07; // 7% VAT rate
    var vatAmount = grossPrice * vatRate;
    document.getElementById("vatAmount").textContent = "$ " + vatAmount.toFixed(2);
    document.getElementById("TotalAmount").textContent = "$ " + (grossPrice + vatAmount).toFixed(2);
        }


// Build VAT Calculator

function calculateVAT() {
    gp = document.getElementById("grossPrice").value;
    var grossPrice = parseFloat(gp);
    var vatRate = 0.07; // 7% VAT rate
    var vatAmount = grossPrice * vatRate;
    document.getElementById("vatAmount").textContent = " $" + vatAmount.toFixed(2);
    document.getElementById("TotalAmount").textContent = " $" + (grossPrice + vatAmount).toFixed(2);

    console.table({gp, grossPrice, vatRate, vatAmount});
        }




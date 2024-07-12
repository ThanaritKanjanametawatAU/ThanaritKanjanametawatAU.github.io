
// Add event listener to the document to capture Enter key press
document.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed
    if (event.keyCode === 13) {
        addItemJQuery();
    }
});



// Use JQuery to add an item to the table
function addItemJQuery() {
    var accessory = $('#accessory-select').val();
    var amount = $('#amount-input').val();
    var accessoryName = $('#accessory-select option:selected').text();
    var price = accessory * amount;


    // Get the table
    var table = $('#product-list');



    // Add a new row to the table
    table.append('<tr><td>' + accessoryName + '</td><td>' + amount + '</td><td>$' + price.toFixed(2) + '</td></tr>');
            
            
            
    // Calculate the total price
    var totalPrice = 0;
    $('#product-list tr').each(function() {
        var priceText = $(this).find('td').eq(2).text().replace('$', '');
        var price = parseFloat(priceText);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    })
            

    
    // Calculate the VAT, and total amount
    var vatAmount = totalPrice * 0.07;
    var NetTotal = totalPrice + vatAmount;



    // Update the total price, VAT, and total amount
    $('#total-price').text('$' + totalPrice.toFixed(2));
    $('#VatAmount').text('$' + vatAmount.toFixed(2));
    $('#NetTotal').text('$' + NetTotal.toFixed(2));
}
        
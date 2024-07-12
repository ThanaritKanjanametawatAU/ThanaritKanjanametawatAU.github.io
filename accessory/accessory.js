


var AllItems = [
    {"id": 1, "name": "Car Cover", "price": 10.00},
    {"id": 2, "name": "Seat Cover", "price": 20.00},
    {"id": 3, "name": "Phone Holder", "price": 30.00},
    {"id": 4, "name": "Car Wax", "price": 150.00},
    {"id": 5, "name": "Iphone 20 Case", "price": 40.00},
    {"id": 6, "name": "Samsung Galaxy S20 Case", "price": 10000.00},
    {"id": 7, "name": "Iphone 20 Screen Protector", "price": 870.00},
    {"id": 8, "name": "Samsung Galaxy S20 Screen Protector", "price": 50090.00},
    {"id": 9, "name": "Iphone 20 Charger", "price": 510.00},
    {"id": 10, "name": "Nuclear Power Bank", "price": 1650.00}
];

var currentCart = [
    {"id": 1, "quantity": 2},
    {"id": 7, "quantity": 3},
    {"id": 10, "quantity": 1}
];


// Add event listener to the document to capture Enter key press
document.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed
    if (event.keyCode === 13) {
        addItemJQuery();
    }
});



// Add Preloaded Items, Dropdown, Render Table to DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    loadDropdown();
    preloadItems();
    renderTable(); // Initial table render from preloaded items
});


function loadDropdown() {
    const selectElement = document.getElementById('product-dropdown');
    AllItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.id + '. ' + item.name + '  -  $' + item.price.toFixed(2);
        selectElement.appendChild(option);
    });
}


function preloadItems() {
    var table = $('#product-list');
    currentCart.forEach(item => {
        var accessory = AllItems.find(a => a.id === item.id);
        if (accessory) {
            table.append('<tr><td>' + accessory.id + '</td><td>' + accessory.name + '</td><td>$' + accessory.price.toFixed(2) + '</td><td>' + item.quantity + '</td><td>$' + (accessory.price * item.quantity).toFixed(2) + '</td></tr>');
        }
    });
    AggregatePrice(); // Calculate the initial total price after preloading items
}


function loadCSS(filename) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = filename;
    document.getElementsByTagName("head")[0].appendChild(link);
}


function renderTable() {
    loadCSS("accessory.css")
    var table = $('#product-list');
    table.empty(); // Clear the table first
    table.append('<tr><th>Accessory ID</th><th>Accessory Name</th><th>Unit Price ($)</th><th>Amount (Unit)</th><th>Total Price ($)</th><th>Actions</th></tr>');

    // sort the cart by id
    currentCart.sort((a, b) => a.id - b.id);


    // Add each item in the cart to the table
    currentCart.forEach(item => {
        var accessory = AllItems.find(a => a.id === item.id);
        if (accessory) {
            table.append('<tr><td>' + accessory.id + 
                '</td><td>' + accessory.name + 
                '</td><td>$' + accessory.price.toFixed(2) + 
                '</td><td>' + item.quantity + 
                '</td><td>$' + (accessory.price * item.quantity).toFixed(2) + 
                '</td><td><button class="btn btn-secondary" onclick="discardItem(' + accessory.id + ')">Discard All</button> ' +
                '<button class="btn btn-secondary" onclick="openModal(' + accessory.id + ', ' + item.quantity + ')">Discard Some</button></td></tr>');
        }
    });
}


function openModal(id, maxQuantity) {
    $('#modalItemId').val(id);
    $('#modalItemQuantity').attr('max', maxQuantity);
    $('#modalItemQuantity').val('');
    $('#discardModal').modal('show');
}


function discardItem(id) {
    // Remove the item from the cart
    currentCart = currentCart.filter(item => item.id !== id);
    renderTable();
    AggregatePrice();
}

function discardSomeItems() {
    var id = parseInt($('#modalItemId').val());
    var quantityToDiscard = parseInt($('#modalItemQuantity').val());

    var item = currentCart.find(item => item.id === id);

    // Validate the quantity to discard
    if (quantityToDiscard > item.quantity) {
        alert('Haiya!! Quantity to discard cannot be more than the current quantity');
        return;
    }

    else if (quantityToDiscard <= 0) {
        alert('Haiya!! Quantity to discard must be more than 0');
        return;
    }

    // No Error is catched
    else {
        item.quantity -= quantityToDiscard;
        if (item.quantity === 0) {
            currentCart = currentCart.filter(item => item.id !== id);
        }
        renderTable();
        AggregatePrice();
    }


    $('#discardModal').modal('hide');
}




// Use JQuery to add an item to the table
function addItem() {
    // Get the values from the input fields
    var accessoryId = parseInt($('#product-dropdown').val());
    var productAmount = parseInt($('#product-amount').val());

    // Get Accessory Name
    var accessoryName = AllItems.find(a => a.id === accessoryId).name;



    // Validate the input values
    var existingItem = currentCart.find(item => item.id === accessoryId);
    if (existingItem) {
        existingItem.quantity += productAmount; // Update quantity if item exists
    } else {
        currentCart.push({ id: accessoryId, quantity: productAmount }); // Add new item if it does not exist
    }
    renderTable();
    AggregatePrice();

}



function AggregatePrice() {
    var totalPrice = 0;
    currentCart.forEach(item => {
        var accessory = AllItems.find(a => a.id === item.id);
        if (accessory) {
            totalPrice += accessory.price * item.quantity;
        }
    });
    var vatAmount = totalPrice * 0.07;
    var NetTotal = totalPrice + vatAmount;
    $('#total-price').text('$' + totalPrice.toFixed(2));
    $('#VatAmount').text('$' + vatAmount.toFixed(2));
    $('#NetTotal').text('$' + NetTotal.toFixed(2));
}
        
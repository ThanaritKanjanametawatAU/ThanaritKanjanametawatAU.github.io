import { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import DataTable from './dataTable.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import productList from './assets/data.json';

function App() {
  const productRef = useRef();
  const quantityRef = useRef();
  const [productPrice, setProductPrice] = useState(productList[0].price);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([])




  const handleSortAsc = () => {
    const sortedFilteredItems = [...filteredSelectedItems].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredSelectedItems([...sortedFilteredItems]);
  }

    const handleSortDesc = () => {
    const sortedFilteredItems = [...filteredSelectedItems].sort((a, b) => b.name.localeCompare(a.name));
    setFilteredSelectedItems([...sortedFilteredItems]);
    }

  const handleSearch = (keyword) => {
    setFilteredSelectedItems([
      ...selectedItems.filter((order) => order.name.toLowerCase().includes(keyword.toLowerCase()))
    ])
  }

  const handleDeleteByID = (id) => {
    const index = selectedItems.findIndex((order) => order.id === id);
    const itemName = selectedItems.find((order) => order.id === id).name;
    console.log(`Deleted All Index ${index}: ${itemName}`);
    selectedItems.splice(index, 1);
    setSelectedItems([...selectedItems]);
    console.table(selectedItems);
  };


  const handleSelectProductName = (e) => {
    const productID = parseInt(e.target.value);
    const productPriceFilter = productList.map(product => product.id === productID ? product.price : null);
    const productPrice = productPriceFilter.filter(price => price !== null);
    setProductPrice(productPrice);
    console.log(productPrice);
  };



  const handleAdd = (e) => {
    const order = {
      productID: parseInt(productRef.current.value),
      productName: productList.find(product => product.id === parseInt(productRef.current.value)).name,
      productPrice: parseFloat(productPrice),
      productQuantity: parseInt(quantityRef.current.value),
      TotalPrice: parseFloat(productPrice) * parseInt(quantityRef.current.value)
    };
    console.table(order);

    const orderFormatted = {
      id: order.productID,
      name: order.productName,
      price: order.productPrice,
      quantity: order.productQuantity,
      subtotal: order.TotalPrice
    };

    // Check Whether the product is already in the list if so then update the quantity and subtotal, else add the product to the list
    const orderIndex = selectedItems.findIndex(item => item.id === orderFormatted.id);
    let newSelectedItems;

    if (orderIndex === -1) {
      newSelectedItems = [...selectedItems, orderFormatted];
    } else {
      newSelectedItems = [...selectedItems];
      newSelectedItems[orderIndex].quantity += orderFormatted.quantity;
      newSelectedItems[orderIndex].subtotal += orderFormatted.subtotal;
    }
    setSelectedItems(newSelectedItems);



  };

  // Use useEffect to log the selectedItems whenever it changes
  useEffect(() => {
    console.table(selectedItems);
    setFilteredSelectedItems([...selectedItems]);
  }, [selectedItems]);



  const getFilteredTotal = () => {
    return filteredSelectedItems.reduce((total, item) => total + item.subtotal, 0);
  }
  const getGrandTotal = () => {
    return selectedItems.reduce((total, item) => total + item.subtotal, 0);
  };




  return (
    <Container>
      {/* Create Product Form */}
      <Form>
        {/* Input: Product Name */}
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Select id="productID" ref={productRef} onChange={handleSelectProductName}>
            {productList.map(product => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <br />

        {/* Display: Price */}
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={productPrice} readOnly />
        </Form.Group>
        <br />

        {/* Input: Quantity */}
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" ref={quantityRef} />
        </Form.Group>
        <br />

        {/* Add Button */}
        <Button variant="success" onClick={handleAdd}>
          Add
        </Button>
      </Form>





      {/* Display Order Table */}
      <DataTable data={filteredSelectedItems}
                 onDelete={handleDeleteByID}
                 onSearch={handleSearch}
                 onSortAsc={handleSortAsc}
                 onSortDesc={handleSortDesc}/>




        {/* Display Filtered Total */}
        <div className="filtered-total">
            <h3>Filtered Total: ${getFilteredTotal().toFixed(2)}</h3>
        </div>

      
        {/* Display Grand Total */}
        <div className="grand-total">
          <h3>Grand Total: ${getGrandTotal().toFixed(2)}</h3>
       </div>


    </Container>
  );
}

export default App;

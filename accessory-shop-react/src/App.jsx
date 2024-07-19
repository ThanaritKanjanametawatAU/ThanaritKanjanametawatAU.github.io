import {useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import DataTable from './dataTable.jsx';

// Import assets/data.json
import productList from './assets/data.json';

function App() {
  const productRef = useRef();
  const quantityRef = useRef();
  const [productPrice, setProductPrice] = useState(productList[0].price);
  const [selectedItems, setSelectedItems] = useState([]);



  const handleSelectProductName = (e) => {
    const productID = parseInt(e.target.value);
    const productPriceFilter = productList.map(product => product.id === productID ? product.price : null);
    const productPrice = productPriceFilter.filter(price => price !== null);
    setProductPrice(productPrice);
    console.log(productPrice);



  }


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
    }
    setSelectedItems([...selectedItems, orderFormatted]);
  };

  return (
    <Container>


      {/* Create Product Form */}
      <Form>

        {/* Input: Product Name */}
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Select id="productID" ref={productRef} onChange={handleSelectProductName}>

            {productList.map(product =>
                    (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                  )
            )
            }

            </Form.Select>
        </Form.Group>
        <br></br>


        {/*Display: Price*/}
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={productPrice} />
        </Form.Group>
        <br></br>


        {/* Input: Quantity */}
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" ref={quantityRef} />
        </Form.Group>
        <br></br>


        {/* Add Button */}
        <Button variant="success" onClick={handleAdd}>
          Add
        </Button>

      </Form>



        {/* Display Order Table */}
        <DataTable data={selectedItems} />



    </Container>
  );
}

export default App;

import React, {useRef} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Form from 'react-bootstrap/Form';



const DataTable = ({ data, onDelete, onSearch, onSortAsc, onSortDesc}) => {

    const sRef = useRef();

    
    const handleSearch = () => {
        const keyword = sRef.current.value;
        onSearch(keyword);
    }



    return (
        <Container>

            <br/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <input type="text" placeholder="Search..." ref={sRef} style={{marginRight: '10px'}}/>
                <Button onClick={handleSearch}>Search</Button>
                <div style={{marginLeft: '20px', display: 'flex', alignItems: 'center'}}>
                    <span>Sort</span>
                    <i
                        className="bi bi-arrow-up"
                        onClick={onSortAsc}
                        style={{
                            cursor: 'pointer',
                            border: '1px solid black',
                            padding: '2px',
                            marginLeft: '5px',
                            marginRight: '5px'
                        }}
                    ></i>
                    <i
                        className="bi bi-arrow-down"
                        onClick={onSortDesc}
                        style={{
                            cursor: 'pointer',
                            border: '1px solid black',
                            padding: '2px'
                        }}
                    ></i>
                </div>
            </div>


            {/*Table*/}
            <table className="table">
                <thead>
                <tr>

                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.subtotal}</td>
                        <td><i className="bi bi-trash" onClick={() => onDelete(order.id)}></i></td>

                    </tr>
                ))}
                </tbody>
            </table>


        </Container>
    );
}

export default DataTable;
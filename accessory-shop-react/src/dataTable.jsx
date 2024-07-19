import React from "react";

const DataTable = ({ data }) => {
    return (
        <table className="table">
        <thead>
            <tr>
            
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
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

            </tr>
            ))}
        </tbody>
        </table>
    );
}

export default DataTable;
import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios';
import Image from 'next/image'
import mypic from '../asset/qr.jpeg'
import { useStateContext } from '../context/StateContext';




function CreateUser() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            await Axios.get("/api/orders")
                .then(res => {
                    setOrders(res.data);
                    console.log(orders);
                });
        };
        fecthData();
    }, []);

    return (
        <>
            <table>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Total Price</th>
                    <th>Created At</th>
                </tr>
                {orders.map((orders, index) => 
                <tr>
                    <td>{index}</td>
                    <td>{orders.name}</td>
                    <td>{orders.email}</td>
                    <td>{orders.phone}</td>
                    <td>{orders.address}</td>
                    <td>{orders.pincode}</td>
                    <td>{orders.city}</td>
                    <td>{orders.state}</td>
                    <td>{orders.productName}</td>
                    <td>{orders.productQuantity}</td>
                    <td>{orders.amount}</td>
                    <td>{orders.createdAt}</td>
                </tr>
                )}
                </table>
        </>
    )
}

export default CreateUser


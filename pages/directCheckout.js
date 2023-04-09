import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios';
import Image from 'next/image'
import mypic from '../asset/qr.jpeg'
import { useStateContext } from '../context/StateContext';




const directCheckout = () => {
  const [loading, setLoading] = useState(false);
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();


  const handleSubmit = async (event) =>{
    setLoading(true);
    event.preventDefault();
      const order = {
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
        "pincode": pincode,
        "city": city,
        "state": state,
        "productName": cartItems.length >= 1 && cartItems.map((item) => (item.name)),
        "productQuantity": cartItems.length >= 1 && cartItems.map((item) => (item.quantity)),
        "amount": totalPrice
        }
      try{
        const { data } = await Axios({url: "/api/orders", method: "POST", data: order})
        .then(function (response) {
          if (response.data.redirect == '/') {
              window.location.href = "/success"
          }})
      }catch (error) {
        console.log("Error", error)
      }
      setLoading(false);

  }

  const displayRazorpay = async() => {
    const res = await loadRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    const price = totalPrice.toString()
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { 
      method: "POST",
      body: JSON.stringify({
        amount: totalPrice,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    }).then((t) =>
      t.json()
    );
    var options = {
      key: 'rzp_test_qANyBXD74BxAM9', // Enter the Key ID generated from the Dashboard
      name: "S P Solutions Point Pvt. Ltd.",
      currency: data.currency,
      amount: totalPrice*10000,
      order_id: data.id,
      description: "Thank You for your Order",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        alert("Payment Successful, please fill the delivery details below");
      },
      prefill: {
        name: "Sameer",
        email: "ranjansameer@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);
  
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };
  
return (
  <div className='success-wrapper'>
      <div className="success">
          <button type="button" onClick={displayRazorpay} width="30px" className="payment-btn">
                    Pay Here
            </button>

          
          <h2 className="direct-pay">
              Delivery Details
          </h2>
          
        <div className="form-control-1">
        <label className="label" htmlFor="name">Items Bought</label>
          {cartItems.length >= 1 && cartItems.map((item) => (
							<p>{item.name}</p>
            ))}
        </div>
        <form onSubmit={handleSubmit} className="form-control-1">
          <div className="form-control-1">
							<label className="label" htmlFor="name">Full Name*</label>
							<input value={name} onChange={({target}) => setName(target?.value)} autoComplete="off" type="text" className="form-control-1" name="name" id="name" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="email">Email Id*</label>
							<input value={email} onChange={({target}) => setEmail(target?.value)}type="email" className="form-control-1" name="email" id="email" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="phone">Phone No.*</label>
							<input value={phone} onChange={({target}) => setPhone(target?.value)} type="text" maxlength="10" className="form-control-1" placeholder="+91" name="phone" id="phone" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="address">Address*</label>
							<input value={address} onChange={({target}) => setAddress(target?.value)} autoComplete="off"type="text" className="form-control-1" name="address" id="address" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="pincode">Pincode*</label>
							<input value={pincode} onChange={({target}) => setPincode(target?.value)} autoComplete="off"type="text" maxLength="6" className="form-control-1" name="pincode" id="pincode" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="city">City*</label>
							<input value={city} onChange={({target}) => setCity(target?.value)} autoComplete="off"type="text" className="form-control-1" name="city" id="city" required/>
					</div>
          <div className="form-control-1">
							<label className="label" htmlFor="name">State*</label>
							<select name="state" value={state} onChange={({target}) => setState(target?.value)} id="state" className="form-control-1">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              </select>
					</div>
          
              <button type="submit" width="300px" className="btn2">
                  Place Order
              </button>
          
          </form>
      </div>

  </div>
)
}

export default directCheckout

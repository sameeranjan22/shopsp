import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios';
import Image from 'next/image'
import mypic from '../asset/qr.jpeg'
import { useStateContext } from '../context/StateContext';



const directCheckout = () => {
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
        "amount": totalPrice - (totalPrice*0.01)
        }
      try{
        const { data } = await Axios({url: "/api/orders", method: "POST", data: order})
        .then(function (response) {
          if (response.data.redirect == '/') {
              window.location = "/success"
          }})
      }catch (error) {
        console.log(error.response)
      }
  }




  
return (
  <div className='success-wrapper'>
      <div className="success">
          
          <h2 className="direct-pay">
              Total Amount Pay ₹{totalPrice - (totalPrice*0.01)}
          </h2>
          <h3>UPI QR Code</h3>
          <Image 
            src={mypic}
            className={"qr-image"}
            width="200px"
            height="200px"
          />
        <div className="form-control-1">
        <label className="label" htmlFor="name">Items Bought</label>
          {cartItems.length >= 1 && cartItems.map((item) => (
							<p>{item.name}</p>
            ))}
        </div>
        <form className="form-control-1">
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
							<input value={pincode} onChange={({target}) => setPincode(target?.value)} autoComplete="off"type="text" maxlength="6" className="form-control-1" name="pincode" id="pincode" required/>
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
              <button type="button" onClick={handleSubmit} width="300px" className="btn2">
                  Place your Order
              </button>
          
          </form>
      </div>

  </div>
)
}

export default directCheckout

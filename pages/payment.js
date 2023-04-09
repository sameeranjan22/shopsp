import React, { useRef, useState, useEffect } from "react";
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
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
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
          <h2 className="direct-pay">
              Total Amount Pay ₹{totalPrice}
          </h2>
 
          
        <div className="form-control-1">
          {cartItems.length >= 1 && cartItems.map((item) => (
							<p>{item.name}</p>
            ))}
        </div>
  
              <button type="button" onClick={displayRazorpay} width="300px" className="btn2">
                  Pay Now
              </button>
          

      </div>

  </div>
)
}

export default directCheckout

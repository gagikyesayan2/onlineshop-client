import React from "react";
import PaymentForm from "./components/PaymentForm";
import BuyingProduct from "./components/BuyingProduct";

import ShippingForm from "./components/ShippingForm";

const paymentPageStyle = {
    display:"flex",
    justifyContent:"space-between",
    margin:"0 auto",
    maxWidth:"1080px"
}
const paymentPageParent = {
    background:"white"
    
}

const Payment = () =>{
    return(
        <div style={paymentPageParent} className="payment-page-parent">
     
        <div style={paymentPageStyle} className="payment-page">
            {
            <ShippingForm />

            }
            {
            <BuyingProduct />

            }
        </div>
               
        </div>
    )
}

export default Payment;
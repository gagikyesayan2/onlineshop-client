
import React, { useState } from "react";
import "./componentStyles/paymentForm.css";

const PaymentForm = ({ shippingCompleted, setShippingCompleted, onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [formData, setFormData] = useState({
    creditCardNumber: "",
    creditCardName: "",
    creditCardExpiry: "",
    creditCardCVC: "",
    paypalEmail: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ paymentMethod, ...formData });
  };

  return (
    <form className="payment-form">
      <h2>Payment Details</h2>

      <div className="payment-method">
       
        <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => setPaymentMethod("creditCard")}
          />
         <label>
         
         Credit Card
       </label>
        <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          <label>
        
        PayPal
      </label>
      </div>

      {paymentMethod === "creditCard" && (
        <div className="credit-card-fields">
          <div className="form-group">
            <label htmlFor="creditCardNumber">Card Number</label>
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="creditCardName">Name on Card</label>
            <input
              type="text"
              id="creditCardName"
              name="creditCardName"
              value={formData.creditCardName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="creditCardExpiry">Expiry Date</label>
              <input
                type="text"
                id="creditCardExpiry"
                name="creditCardExpiry"
                value={formData.creditCardExpiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditCardCVC">CVC</label>
              <input
                type="text"
                id="creditCardCVC"
                name="creditCardCVC"
                value={formData.creditCardCVC}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div className="paypal-field">
          <div className="form-group">
            <label htmlFor="paypalEmail">PayPal Email</label>
            <input
              type="email"
              id="paypalEmail"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleChange}
              placeholder="example@example.com"
              required
            />
          </div>
        </div>
      )}

      <button onClick={() =>{
        setShippingCompleted(!shippingCompleted);
      }} type="submit" className="submit-button">
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;

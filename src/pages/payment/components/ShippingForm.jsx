import React, { useState } from "react";
import './componentStyles/shippingForm.css';
import PaymentForm from "./PaymentForm";

const ShippingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
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
    onSubmit(formData);
  };
  const [shippingCompleted, setShippingCompleted] = useState(true);

  return (
    <div>
    { shippingCompleted ? 
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2>Shipping Details</h2>

      <div className="form-group country-select">
        <label htmlFor="country">Country</label>
        <select 
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
         <option value="" disabled>
          Select a country
         </option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="France">France</option>
        </select>
     </div>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>


      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>

   


      <button onClick={() =>{
        setShippingCompleted(!shippingCompleted)
      }} type="submit" className="submit-button">
        Buy Now
      </button>
    </form>
     : <PaymentForm shippingCompleted={shippingCompleted} setShippingCompleted={setShippingCompleted}/>}
     </div>
  )
};

export default ShippingForm;

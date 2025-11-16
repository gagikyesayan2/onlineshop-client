import React from 'react';



import './App.css';
// import './css/client-dashboard.css';
// import './css/products.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from './components/layout/Header';
// import ProfileDashboard from './pages/client-dashboard/profile-dashboard';


// import SelectedProduct from './pages/selected-product';
// import BuyProduct from './pages/buy-product';

// import HomePageProducts from './pages/home-products';

import Home from './pages/Home/home';
import ProductDetails from './pages/ProductDetails/ProductDetail';
import { useSelector } from 'react-redux';
import Payment from './pages/payment/Payment';
import BeforeHeaderStatement from './components/layout/BeforeHeaderStatement';


function App() {
   

   
   return (
    <div className="App">
       {
        <Router>
        <div>
          <BeforeHeaderStatement />
           <Header/>
           <Routes>
              {/* <Route path="/profile" element={<ProfileDashboard />} /> */}

              <Route path="/" element={<Home  />}></Route>
              <Route path="/product/:id" element={<ProductDetails />}> </Route>
              <Route path="/payment/product/:id" element={<Payment  />}></Route>

              {/* <Route path="/selectedProduct/:productId" element={<SelectedProduct />}></Route> */}
              {/* <Route path="/buyProduct/:productId" element={<BuyProduct />}></Route> */}
           </Routes>

        </div>
        </Router>
       }
    </div>
  );
}

export default App;

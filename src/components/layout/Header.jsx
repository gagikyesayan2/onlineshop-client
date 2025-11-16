import React, { useState } from 'react';
import './layoutStyles/Header.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Header = () => {
    const rediredOnLogoClick = ()=>{
        return(
            <div>
                 <li><Link to="/">Home</Link></li>  
            </div>
        )
    }
    const [mobileBtnClicked,setMobileBtnClickedUrl] = useState(false);

    const home = document.querySelector('.home')
    if(mobileBtnClicked && home){
        document.body.style.overflowY = 'hidden';
        home.style.opacity = "0.5"
    }else if(home){
        document.body.style.overflowY = '';
          home.style.opacity = "1"
      }
   
    return(
        <div className="header">
            <div className="mobile-navbar">
            {
                mobileBtnClicked ? 
                <div className="mobile-navbar-inner">
  <div className="nav">
            <ul>
               <li><Link className="profile-link" to="/">Home</Link></li>  
               <li className="dropdown">
                <Link className="profile-link" to="/">Shop</Link>
                <div className="dropdown-content">
                    <Link to="/shop/stud-earrings">Stud Earrings</Link>
                    <Link to="/shop/hoop-earrings">Hoop Earrings</Link>
                    <Link to="/shop/drop-earrings">Drop Earrings</Link>
                    <Link to="/shop/chandelier-earrings">Chandelier Earrings</Link>
                    <Link to="/shop/gold-earrings">Gold Earrings</Link>
                    <Link to="/shop/silver-earrings">Silver Earrings</Link>
                    <Link to="/shop/modern-earrings">Modern Earrings</Link>
                    <Link to="/shop/bohemian-earrings">Bohemian Earrings</Link>
                </div>
                </li> 
         
               <li><Link className="profile-link" to="/">About Us</Link></li>  
               <li><Link className="profile-link" to="/">Contact Us</Link></li> 
               <li className="search-bar">
                    <div className="inner-search-bar">
                        <img src={require('../../assets/icons/search-icon.png')} alt="" />
                        <input placeholder='Find earrings you love' type="text" />
                    </div>
                  
                </li> 
            </ul>
           </div>
                </div>
                : ""
            }
            </div>
          
            <div className="row">
            <div className="logo">
                    <h2 ><Link className="inner-logo" to="/">TwinkLobe</Link></h2>
                </div>
              
            <div className="nav">
            <ul>
               <li><Link className="profile-link" to="/">Home</Link></li>  
               <li className="dropdown">
                <Link className="profile-link" to="/">Shop</Link>
                <div className="dropdown-content">
                    <Link to="/shop/stud-earrings">Stud Earrings</Link>
                    <Link to="/shop/hoop-earrings">Hoop Earrings</Link>
                    <Link to="/shop/drop-earrings">Drop Earrings</Link>
                    <Link to="/shop/chandelier-earrings">Chandelier Earrings</Link>
                    <Link to="/shop/gold-earrings">Gold Earrings</Link>
                    <Link to="/shop/silver-earrings">Silver Earrings</Link>
                    <Link to="/shop/modern-earrings">Modern Earrings</Link>
                    <Link to="/shop/bohemian-earrings">Bohemian Earrings</Link>
                </div>
                </li> 
         
               <li><Link className="profile-link" to="/">About Us</Link></li>  
               <li><Link className="profile-link" to="/">Contact Us</Link></li> 
               <li className="search-bar">
                    <div className="inner-search-bar">
                        <img src={require('../../assets/icons/search-icon.png')} alt="" />
                        <input placeholder='Find earrings you love' type="text" />
                    </div>
                  
                </li> 
            </ul>
           </div>
         
                <div className="mobile-btn">
                    <img onClick={() =>{
                        setMobileBtnClickedUrl(!mobileBtnClicked)
                    }} src={require(`../../assets/icons/${mobileBtnClicked ? "mobile-btn-close.png" : "mobile-btn.png"}`)} alt="" />
                    
                </div>
                <div className="signout">
                    <img className="cart" src={require('../../assets/icons/cart.png')} alt="" />
                    <button>Sign In</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header;
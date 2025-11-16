import React from "react";
import './componentStyles/mainsection.css';

const MainSection = () =>{
    return(
        <div className="main-section">
             <img src={require('../../../assets/background-images/main-section.png')} alt="" />
        </div>
    )
}

export default MainSection;
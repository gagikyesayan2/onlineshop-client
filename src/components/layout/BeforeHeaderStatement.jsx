import React from 'react';

const statementParentStyle = {
    backgroundColor: "#f4f4f4", /* Light gray background */
    color: "#333", /* Dark text color for contrast */
    textAlign: "center", /* Center the text */
    fontSize: "16px", /* Adjust font size for readability */
    padding: "10px 0",/* Add vertical padding */
    fontWeight: "bold",/* Make the text stand out */
    borderBottom: "1px solid #ddd", /* Add a subtle border for separation */
}


const BeforeHeaderStatement = () =>{
    
    return(
        <div style={statementParentStyle} className="statement">
            <p>Enjoy Free Shipping to the USA and UK on All Orders!</p>
        </div>
    )
}

export default BeforeHeaderStatement;
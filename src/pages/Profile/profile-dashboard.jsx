import React from 'react';


const ProfileDashboard = () =>{

    return(
        <div className="profile-dashboard">
            <div className="row">
                <div className="col-profile-top">
                    <h3>Shipping Details</h3>
                </div>
                <div className="col-profile-top">
                    <h3>My Orders</h3>
                </div>
                <div className="col-profile-top">
                    <h3>Any Questions?</h3>
                    <p>Our Support team works 24/7</p>
                </div>
                <div className="col-profile">
                    <h3>Payment Methods</h3>
                </div>
                <div className="col-profile">
                    <h3>Current Balance </h3>
                </div>
                <div className="col-profile">
                    <h3>Bought Products </h3>
                </div>
                <div className="col-profile">
                    <h3>Bought Products </h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileDashboard;
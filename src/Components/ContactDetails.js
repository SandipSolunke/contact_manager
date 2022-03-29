import React from "react";
import { Link } from "react-router-dom";
import user from "../images/contact-icon.png";
import { useLocation } from 'react-router-dom'

const ContactDetails = (props) => {
    const location = useLocation();
    const { name, email } = location.state.contact;
    return (
        <div className="ui center aligned container">
            <div style={{ marginTop: "20px" }}>
                <div className="ui card contactcard center aligned container">
                    <div className="image">
                        <img src={user} alt="user"></img>
                    </div>
                    <div className="content">
                        <div className="header">Name : {name}</div>
                        <div className="description">Email : {email}</div>
                    </div>
                </div>
            </div>

            <div className="ui center aligned container" style={{marginTop: "20px" }}>
                <Link to="/">
                    <button className="ui button negative">Back</button>
                </Link>
            </div>
        </div>
    );

};

export default ContactDetails;
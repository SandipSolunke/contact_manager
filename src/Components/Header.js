import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="ui center aligned container">
            <div className="ui menu" style={{height:"20px"}}>
                    <div className="item" style={{fontFamily:"cursive" , fontWeight:"bolder", color:"white",backgroundColor:"rgb(143, 6, 6)"}}><i className="address book icon" style={{fontSize:"15px"}}></i>Contact Manager</div>
                <div className="right menu">
                <Link to="/">
                <div className="item" >Home</div>
                </Link>
                <Link to="/add">
                <div className="item">Add New</div>
                </Link>
                </div>
            </div>
        </div >
    );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import user from "../images/avtar.png";
import { BrowserRouter as Route } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{ marginTop: "20px" }}>
            <div className="left floated content">
                <div className="content">
                    <Link to={`/contact/${id}`} state={{ contact: props.contact }} >
                        <div className="header">
                            <div className="left floated content">
                                <i className="address card icon" style={{ fontSize: "15px" }}></i>

                                {name}
                            </div>
                        </div>
                        <div className="left floated content"><span style={{ fontFamily: "sans-serif", color: "black" }}>Mail :</span>{email}</div>
                    </Link>
                </div>
            </div>
            <div className="right floated content">
                <Link to="/Edit" state={{ contact: props.contact }}>
                    <i className="edit alternate outiline icon" style={{ color: "black", marginTop: "7px", cursor: "pointer", marginRight: "15px" }}></i>
                </Link>
                {/* <Route render={({ history }) => ( */}
                    {/* <i className="edit alternate outiline icon" onClick={() => { history.push('/Edit') }} style={{ color: "black", marginTop: "7px", cursor: "pointer", marginRight: "15px" }}></i> */}
                {/* )} /> */}

                <Link to="/DeleteConfirmation" state={{ id: id }}>
                    <i className="trash alternate outiline icon" style={{ color: "red", marginTop: "7px", cursor: "pointer" }}></i>
                </Link>

            </div>
        </div>
    );
};

export default ContactCard;
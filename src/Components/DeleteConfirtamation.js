import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function DeleteConfirmation(props) {
    const location = useLocation();
    const { id } = location.state
    return (
        <div className="ui center aligned container" style={{ marginTop: "250px" }}>
            <div className="ui center aligned container"><h2>Delete?</h2></div>
            <div className="actions">
                <Link to="/">
                    <div className="ui deny button">
                        Cancel
                    </div>
                    <div className="ui negative right labeled icon button">
                        Ok
                        <i onClick={() => props.clickHandler(id)} className="trash alternate icon"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}


export default DeleteConfirmation;
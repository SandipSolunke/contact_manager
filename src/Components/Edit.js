import React from 'react'

import { Component } from "react";
import { useLocation } from "react-router-dom";




class Edit extends Component{

    constructor(props){
        super(props);
        console.log("here")
        const{id,name,email}=props.location
        console.log(name)
        this.state={
            id,
            name,
            email
        };
    }

    update=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory..!");
        }
        else{
            this.props.updateContactHandler(this.state);
            this.setState({name:this.state.name,email:""});
        }
    };

    textChange=(name,e)=>{
        this.setState({
            [name]:e.target.value,
        });
    };

    render(){
        return (
            <>
            <div className="ui main" style={{marginTop:"20px"}}>
                <h2>Add Contacts</h2>
                <div className="ui divider" style={{borderTop:"1px dashed black"}}></div>
                <form onSubmit={this.update} className="ui form">
                    <div className="field">
                        <label className="ui left aligned container">Name :</label>
                        <input type="text" value={this.state.name} onChange={this.textChange.bind(this,"name")} placeholder="Name"></input>
                    </div>

                    <div className="field">
                        <label className="ui left aligned container">Email :</label>
                        <input type="email" value={this.state.email} onChange={this.textChange.bind(this,"email")} placeholder="Email"></input>
                    </div>

                    <button className="ui button negative">Update</button>


                </form>
            </div>
            </>
        );
    }
}

export default Edit;
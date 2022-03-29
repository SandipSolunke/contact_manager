import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const removeContact = (id) => {
        console.log("here");
        props.getContactId(id);
    };
    const rendercontactlist = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={removeContact} key={contact.id} />
        )
    })
    return (
        <>
            <h2 style={{ marginTop: "20px" }}>
                Contact List
            </h2>
            <div className="ui divider" style={{borderTop:"1px dashed black"}}></div>
            <div className="ui middle aligned divided list">
                {rendercontactlist}
                <div className="ui divider" style={{ borderTop: "1px dashed black" }}></div>

            </div>
        </>
    );
}

export default ContactList;
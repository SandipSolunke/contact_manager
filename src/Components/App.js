import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContacts from "./AddContacts";
import ContactList from "./ContactList";
import { v4 as uuid } from 'uuid';
import api from "../api/contacts";
import ContactDetails from "./ContactDetails";
import DeleteConfirmation from "./DeleteConfirtamation";
import Edit from "./Edit"

function App() {
  const [contacts, newstate] = useState([]);

  //fetch contacts from json server
  const retrieveContacts=async ()=>{
    const response=await api.get("/contacts");
    return response.data;
  };

  const updateContactHandler=()=>{

  };
  const Update_contact =async (contact) => {
    const request={
      id:uuid(),
      ...contact
    }

    const response= await api.post("/contacts",request)
    newstate([...contacts, response.data])
  }

  const removeContact = async (id) => {
    await api.delete("/contacts/"+id);
    const newConctactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    newstate(newConctactList);
  }

  useEffect(() => {
    // const GetConacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON));
    // newstate(GetConacts);

    const getAllContacts=async()=>{
      const allContacts=await retrieveContacts();
      if(allContacts) newstate(allContacts);
    };

    getAllContacts();


  }, []);



  return (
    <div>

      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContacts newcontact={Update_contact} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContact} />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/DeleteConfirmation" element={<DeleteConfirmation clickHandler={removeContact} />} />
          <Route path="/Edit" element={<Edit/>}/>
        </Routes>
      </Router>

    </div>
  );  
}

export default App;

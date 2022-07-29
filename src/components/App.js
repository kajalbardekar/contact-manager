import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";


import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);



  
  return (
    <div className="ui container">
      <BrowserRouter>
             <Header/>
             <Routes>
           
              <Route path ="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
              <Route path ="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}/>
              <Route path ="/contact/:id" element={<ContactDetails/>}/>

              {/*<AddContact addContactHandler={addContactHandler} />
             <ContactList contacts={contacts} getContactId={removeContactHandler} />*/}
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

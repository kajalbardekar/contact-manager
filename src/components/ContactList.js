import React from 'react'
import ContactCard from './ContactCard';
import {Link,useNavigate} from "react-router-dom";

const ContactList = (props) => {
    // console.log(props);
    const navigate=useNavigate();

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }


    const renderContactList = props.contacts.map((contact) => {
        return (
            < ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );

    });
    return (
        <div className="main">
                   <h1></h1>
            <h1>Contact List</h1>
            <button className='ui button blue right'  onClick={()=>navigate('/add')}>Add Contact</button>
            <div className='ui celled list'>{renderContactList}</div>
             
        </div>
    );

};

export default ContactList;

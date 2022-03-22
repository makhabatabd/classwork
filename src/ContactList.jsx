import React, { useContext, useEffect } from "react";
import { contactContext } from "./contexts/ContactContext";

const ContactList = () => {
  const { contacts, getContacts, deleteContact, editContact } =
    useContext(contactContext);
  console.log(contacts);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contacts.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.phone}</div>
            <div>{item.email}</div>
            <img src={item.img} width="200px" />
            <br />
            <button onClick={() => editContact(item.id)}>Edit</button>
            <button onClick={() => deleteContact(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;

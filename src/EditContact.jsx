import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { contactContext } from "./contexts/ContactContext";

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(contactContext);
  const [newEditItem, setNewEditItem] = useState(contactToEdit);
  useEffect(() => {
    setNewEditItem(contactToEdit);
  }, [contactToEdit]);

  function handleEditInput(e) {
    let newContact = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newContact);
  }

  return (
    <div>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInput}
            value={newEditItem.name}
            type="text"
            name="name"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.phone}
            type="number"
            name="phone"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.email}
            type="email"
            name="email"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.img}
            type="text"
            name="img"
          />
          <br />
          <button onClick={() => saveContact(newEditItem)}>Save</button>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default EditContact;

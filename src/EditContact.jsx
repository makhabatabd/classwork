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
      contact: e.target.value,
    };
    setNewEditItem(newContact);
  }

  return (
    <div>
      {newEditItem ? (
        <>
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.name}
            type="text"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.phone}
            type="number"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.email}
            type="email"
          />
          <br />
          <input
            onChange={handleEditInput}
            defaultValue={newEditItem.img}
            type="text"
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

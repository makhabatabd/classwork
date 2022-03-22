import React, { useContext, useState } from "react";
import { contactContext } from "./contexts/ContactContext";

const AddContacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const { addContactsList } = useContext(contactContext);

  function handleClick() {
    let newObj = {
      name,
      phone,
      email,
      img,
    };
    if (!name || !phone || !email || !img) {
      alert("Fill in");
      return;
    }
    addContactsList(newObj);
    setName("");
    setPhone("");
    setEmail("");
    setImg("");
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <input
        value={phone}
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="phone"
      />
      <br />
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <br />
      <input
        value={img}
        type="text"
        onChange={(e) => setImg(e.target.value)}
        placeholder="image"
      />
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddContacts;

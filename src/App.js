import React, { useState } from "react";
import AddContacts from "./AddContacts";
import "./App.css";
import ContactList from "./ContactList";
import ContactsContextProvider from "./contexts/ContactContext";
import Counter from "./Counter";
import EditContact from "./EditContact";
import Form from "./Form/Form";
import Ingredients from "./Ingredients";
import Receipts from "./Receipts";

function App() {
  const [meal, setMeal] = useState("");
  return (
    <div>
      <ContactsContextProvider>
        <Counter />
        <Receipts meal={meal} setMeal={setMeal} />
        <Ingredients meal={meal} />
        <Form />
        <ContactList />
        <AddContacts />
        <EditContact />
      </ContactsContextProvider>
    </div>
  );
}

export default App;

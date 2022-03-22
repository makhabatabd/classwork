import axios from "axios";
import React, { useReducer } from "react";

export const contactContext = React.createContext();
const API = "http://localhost:8000/contacts";
const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getContacts = async () => {
    let { data } = await axios(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };

  const addContactsList = (newContact) => {
    axios.post(API, newContact);
    getContacts();
  };
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }
  const editContact = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });
    getContacts();
  };
  const saveContact = async (newContact) => {
    axios.patch(`${API}/${newContact.id}`, newContact);
    getContacts();
  };
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
        addContactsList,
        getContacts,
        deleteContact,
        editContact,
        saveContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
export default ContactContextProvider;

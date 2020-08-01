import axios from "axios";
import phonebookActions from "./phonebookActions";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(phonebookActions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((res) => {
      dispatch(phonebookActions.addContactSuccess(res.data));
    })
    .catch((error) => dispatch(phonebookActions.addContactError(error)));
};

const getContacts = () => (dispatch) => {
  dispatch(phonebookActions.getContactsRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(phonebookActions.getContactsSuccess(data)))
    .catch((error) => dispatch(phonebookActions.getContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(phonebookActions.removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
    .catch((error) => dispatch(phonebookActions.removeContactError(error)));
};

export default {
  addContact,
  getContacts,
  removeContact,
};

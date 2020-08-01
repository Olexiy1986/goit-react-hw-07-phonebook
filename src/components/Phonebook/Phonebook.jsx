import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import Section from "../../common/Section/Section";
import phonebookOperations from "../../redux/phonebookOperations";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <>
        <ContactForm />

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}
const mapDispatchToProps = {
  onGetContacts: phonebookOperations.getContacts,
};
export default connect(null, mapDispatchToProps)(Phonebook);

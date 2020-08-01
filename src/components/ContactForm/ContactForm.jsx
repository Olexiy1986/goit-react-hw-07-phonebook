import React, { Component } from "react";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebookOperations";
import PropTypes from "prop-types";
import "./ContactForm.scss";

class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  hendleSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };
  hendleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="ContactForm" onSubmit={this.hendleSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          className="input1"
          name="name"
          value={name}
          onChange={this.hendleInputChange}
        />
        <h3>Number</h3>
        <input
          type="text"
          className="input2"
          name="number"
          value={number}
          onChange={this.hendleInputChange}
        />
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAdd: phonebookOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);

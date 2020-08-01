import React from "react";
import { connect } from "react-redux";
import "./ContactItem.scss";

import phonebookOperations from "../../redux/phonebookOperations";
import phonebookSelectors from "../../redux/phonebookSelectors";

const ContactItem = ({ name, number, onRemove }) => {
  return (
    <li className="contacts__item">
      <span className="contacts__name">{name}:</span>
      <span className="contacts__number">{number}</span>
      <button className="removeButton" onClick={onRemove}>
        x
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = phonebookSelectors.getContactById(state, ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(phonebookOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

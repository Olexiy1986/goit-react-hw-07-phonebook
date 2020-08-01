import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebookActions";

const Filter = ({ items, value, onFilterChange }) => {
  return (
    items.length >= 2 && (
      <>
        <div className="filter">
          <h3>Find contacts by name</h3>
          <input
            type="text"
            name="filter"
            value={value}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </div>
      </>
    )
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
  items: state.contacts.items,
});
const mapDispatchToProps = {
  onFilterChange: phonebookActions.filterChange,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

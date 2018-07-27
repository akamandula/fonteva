import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
  return (
    <div className="sidebar">
      <div className="filter-group">
        <label>Name:</label>
        <input value={props.name} onChange={props.changeName} type="text" />
      </div>
      <div className="filter-group">
        <label>Material:</label>
        <input value={props.material} onChange={props.changeMaterial} type="text" />
      </div>
      <div className="filter-group">
        <label>Price:</label>
        <input value={props.price} onChange={props.changePrice} type="text" />
      </div>
      <div className="filter-group">
        <label>Color:</label>
        <input value={props.color} onChange={props.changeColor} type="text" />
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
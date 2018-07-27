import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div className="product-card">
      <Link to={`/info/${props.id}`}>
        <img className="img-responsive" src={props.image} alt="" />
      </Link>
      <h4>{props.name}</h4>
      <p>price: {props.price}</p>
      <p>description {props.description}</p>
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
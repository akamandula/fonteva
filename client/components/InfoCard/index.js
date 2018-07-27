import React from 'react';
import { Col, Row } from 'react-flexbox-grids';
import PropTypes from 'prop-types';

const InfoCard = props => {
  return (
    <div className="info-card">
      <Row>
        <Col xs={12}>
          <h2>{props.name}</h2>
        </Col>
        <Col xs={6}>
          <img
            className="img-responsive"
            src={props.image}
            alt=""
          />
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <label htmlFor="material">Material - {props.material}</label>
              <label htmlFor="name">Color - {props.color}</label>
              <label htmlFor="name">Price - {props.price}</label>
              <div>
                <label htmlFor="">QTY</label>
                <input type="text" defaultValue="1" />
              </div>
              <button>
                Add To Cart
              </button>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <p>{props.description}</p>
        </Col>
      </Row>
    </div>
  );
};

InfoCard.propTypes = {};

InfoCard.defaultProps = {};

export default InfoCard;
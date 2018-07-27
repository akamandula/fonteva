import React from 'react';
import { Row, Col } from 'react-flexbox-grids';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <Row>
      <Sidebar
        name={props.state.filters.name}
        material={props.state.filters.material}
        color={props.state.filters.color}
        price={props.state.filters.price}
        changeName={props.actions.changeFilter('name')}
        changeMaterial={props.actions.changeFilter('material')}
        changeColor={props.actions.changeFilter('color')}
        changePrice={props.actions.changeFilter('price')}
      />
      <div className="hero">
        <img
          className="img-responsive"
          src="https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?ixlib=rb-0.3.5&s=d3a9e42a09652f2deba706564b710814&auto=format&fit=crop&w=1650&q=80"
          alt=""
        />
      </div>
      <Col xs={12}>
        <Row>
          {props.state.items.map((card, index) => {
            return <Col
              key={index}
              xs={4}>
              <Card
                id={card.id}
                image={card.image}
                name={card.name}
                price={card.price}
                description={card.description}
              />
            </Col>
          })}
        </Row>
      </Col>
      <Col xs={12}>
        <Pagination />
      </Col>
    </Row>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
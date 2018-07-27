import React, { Component } from 'react';
import * as R from 'ramda';
import { Row, Col } from 'react-flexbox-grids';
import { Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import withStore from './store/withStore';
import './css/index.scss';

// Routes
class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Row className="main">
          <Col xs={12}>
            <Route path="/" exact component={withStore(Home)} />
            <Route path="/info/:id" exact component={withRouter(withStore(Info))} />
          </Col>
        </Row>
      </div>
    );
  };
}

export default R.compose(
  withRouter,
)(Routes);

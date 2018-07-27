import React from 'react';
import InfoCard from '../../components/InfoCard';
import PropTypes from 'prop-types';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState({ data: this.props.actions.findItemById(id) })
  }

  render() {
    console.log(this.state);

    return (
      <div className="info">
        <InfoCard
          image={this.state.data.image}
          name={this.state.data.name}
          material={this.state.data.material}
          color={this.state.data.color}
          price={this.state.data.price}
          description={this.state.data.description}
        />
      </div>
    );
  }
}

Info.propTypes = {};

Info.defaultProps = {};

export default Info;
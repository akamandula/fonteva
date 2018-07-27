import React from 'react';
import subset from '../assets/subset';
import R from 'ramda';

const Context = React.createContext();
const Consumer = Context.Consumer;

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filters: {
        name: '',
        material: '',
        price: '',
        color: '',
      }
    };
  }

  componentWillMount() {
    this.setState({ items: subset });
  }

  changeFilter = prop => e => {
    this.setState({
      filters: { ...this.state.filters, ...{ [prop]: e.target.value } }
    });
  };

  findItemById = (_id) => {
    return this.state.items.find(({ id }) => _id === id);
  };

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        actions: {
          changeFilter: this.changeFilter,
          findItemById: this.findItemById,
        }
      }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Store;

export {
  Consumer
}
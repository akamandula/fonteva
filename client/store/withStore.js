import React from 'react';
import { Consumer } from './';

const withStore = Component => props => {
  return (
    <Consumer>
      {({ state, actions, ...rest }) => {
        return <Component
          state={state}
          actions={actions}
          {...rest}
          {...props}
        />
      }}
    </Consumer>
  );
};

export default withStore;

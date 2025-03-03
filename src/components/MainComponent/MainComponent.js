import React, {useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import inventoryReducer from "../../reducers/inventoryReducer"
const MainComponent = () => {
  const [state, dispatch] = useReducer(inventoryReducer, {});
  useEffect(() =>{
    console.log(state.inventoryItems);
  })
 return (<div data-testid="MainComponent">
    MainComponent Component
  </div>);
};

MainComponent.propTypes = {};

MainComponent.defaultProps = {};

export default MainComponent;

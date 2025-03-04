import React, {useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import inventoryReducer from "../../reducers/inventoryReducer";
import InventoryListComponent from '../InventoryListComponent/InventoryListComponent';
const MainComponent = () => {
  const [state, dispatch] = useReducer(inventoryReducer, {});
  useEffect(() =>{
    console.log(state.inventoryItems);
  })
 return (<div data-testid="MainComponent">
    <InventoryListComponent></InventoryListComponent>
  </div>);
};

MainComponent.propTypes = {};

MainComponent.defaultProps = {};

export default MainComponent;

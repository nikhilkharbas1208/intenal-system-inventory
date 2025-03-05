import React, { useEffect, useReducer } from "react";
import PropTypes, { element } from "prop-types";
import inventoryData from "../../helpers/InventoryItems.json";

const InventoryListComponent = () => {
  useEffect(() => {
    //console.log("inventoryData::",inventoryData)
  });

  const getInventoryItems = (inventory, isChildItem) => {
    return (
      <div>
        {isChildItem ? (
          <>
            <div>
              <span>
                {inventory?.name}
                {inventory?.isAssigned ? (
                  <span>(Assigned To : {inventory?.assigneeName})</span>
                ) : (
                  <span>(Available)</span>
                )}
              </span>
            </div>
            <span>{inventory?.description}</span>
          </>
        ) : (
          <h4>
            {inventory.name} ({inventory.AvailableStocks})
          </h4>
        )}

        {inventory.items?.map((item) => {
          return getInventoryItems(item, true);
        })}
      </div>
    );
  };
  return (
    <div data-testid="InventoryListComponent">
      {inventoryData.map((inventory) => {
        return (
          <div>
            <h3>{inventory?.name}</h3>
            <div>
              {inventory.items?.map((inventoryItem) => {
                {
                  return getInventoryItems(inventoryItem);
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

InventoryListComponent.propTypes = {};

InventoryListComponent.defaultProps = {};

export default InventoryListComponent;

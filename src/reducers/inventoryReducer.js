import inventoryData from "../helpers/InventoryItems.json";
const initialSate = {
    inventoryItems : inventoryData
}
const inventoryReducer = (state = initialSate, action) =>  {
    switch(action.type){
        case "GET_INVENTORY_ITEMS" :{
            
            return {
                ...state,
                // items: action.payload 
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default inventoryReducer;
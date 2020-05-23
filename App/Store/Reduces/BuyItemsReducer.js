import { INCREMENT, DECREMENT } from '../Actions/BuyItems'
import JsonData from '../../Container/DummyData/Products.json'

const initialIphoneState = {
    JsonData: JsonData
}

const reducer = (state = initialIphoneState, action) => {
    let item = JsonData[action.payload - 1]
     
    switch (action.type) {
        case INCREMENT:
            item.numberOfItems = item.numberOfItems + 1
            return {
                ...state,
                JsonData: JsonData
            }

        case DECREMENT:
            if(item.numberOfItems !== 0){
                item.numberOfItems = item.numberOfItems - 1
            }
            
            return {
                ...state,
                JsonData: JsonData
            }
        default: return state
    }
}

export default reducer


import { INCREMENT, DECREMENT } from '../Actions/BuyItems'
import JsonData from '../../Container/DummyData/Products.json'

const initialIphoneState = {
    JsonData: JsonData
}

const reducer = (state = initialIphoneState, action) => {
    //JsonData is a local data, we can take this from redux state too
    //state.data and we can midify that item instead
    let item = JsonData.find(item => {
        return item.id == action.payload
    })
    switch (action.type) {
        case INCREMENT:
            item.numberOfItems = item.numberOfItems + 1
            return {
                ...state,
                JsonData: [...JsonData]
            }

        case DECREMENT:
            if (item.numberOfItems !== 0) {
                item.numberOfItems = item.numberOfItems - 1
            }

            return {
                ...state,
                JsonData: [...JsonData]
            }
        default: return state
    }
}

export default reducer


import { combineReducers } from 'redux'
import reducer from './Reduces/BuyItemsReducer'

const rootReducer = combineReducers({
    data: reducer
})

export default rootReducer
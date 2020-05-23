import { combineReducers } from 'redux'
import reducer from './Reduces/BuyItemsReducer'

const rootReducer = combineReducers({
    iPhone: reducer
})

export default rootReducer
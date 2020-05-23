import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../Container/Login/Login'
import Products from '../Container/Products/Products'

const switchNavigator = createStackNavigator({
    Login,
    Products
},
    {
        initialRouteName: 'Login'
    }
)

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer
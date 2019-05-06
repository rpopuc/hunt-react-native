import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
    Main,
    Product,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#da552f'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

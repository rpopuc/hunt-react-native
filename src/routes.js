import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const AppNavigator = createStackNavigator({
    Main,
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

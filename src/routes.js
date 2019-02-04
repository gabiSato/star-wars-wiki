import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';

const Routes = createStackNavigator(
    {
        Main: Main,
    }, 
    {
        initialRouteName: 'Main',

        defaultNavigationOptions: {
            headerTintColor: '#000000',
            headerStyle: {
                backgroundColor: "#F2CB06",
            },
        },
    }
);

export default createAppContainer(Routes);
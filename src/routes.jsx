import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import PersonDetail from './screens/PersonDetail';

//responsável pela navegação das páginas e estilização padão do header
const Routes = createStackNavigator(
    {
        Main: Main,
        PersonDetail: PersonDetail
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
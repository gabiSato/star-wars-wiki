import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import PersonDetail from './screens/PersonDetail';
import FilmDetail from './screens/FilmDetail';
import StarshipDetail from './screens/StarshipDetail';
import VehicleDetail from './screens/VehicleDetail';

//responsável pela navegação das páginas e estilização padão do header
const Routes = createStackNavigator(
    {
        Main: Main,
        PersonDetail: PersonDetail,
        FilmDetail: FilmDetail,
        StarshipDetail: StarshipDetail,
        VehicleDetail: VehicleDetail,
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
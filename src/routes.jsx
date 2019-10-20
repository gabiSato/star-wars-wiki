import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./screens/Main";

//responsável pela navegação das páginas e estilização padão do header
const Routes = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Star Wars Wiki"
      }
    }
  },
  {
    initialRouteName: "Main",

    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#1e1f26"
      }
    }
  }
);

export default createAppContainer(Routes);

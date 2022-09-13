import { createStackNavigator } from '@react-navigation/stack';
// import Registro from "../containers/login/Registro";
import Login from "../views/login/Login";


const Stack = createStackNavigator();


const MenuAuthentication = () =>
{
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions=
      {{
        headerShown:false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MenuAuthentication;
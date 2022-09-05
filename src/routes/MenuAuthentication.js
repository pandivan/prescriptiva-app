import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Registro from "../containers/login/Registro";
import Login from "../views/login/Login";


const Stack = createNativeStackNavigator();


const MenuAuthentication = () =>
{
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MenuAuthentication;
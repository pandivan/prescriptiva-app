import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MenuHome from "./src/routes/MenuHome";


//Creando Menu de Navegación
const Stack = createStackNavigator();


export default function App() 
{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuHome" component={MenuHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React, { useEffect, useReducer, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import "react-native-gesture-handler";

import MenuHome from "./src/routes/MenuHome";
import MenuAuthentication from "./src/routes/MenuAuthentication";
import SplashScreen from "./src/components/SplashScreen";
import AuthContext from "./src/contexts/AuthContext"
import clientServices from "./src/services/ClientServices";



//Creando Menu de Navegación
const Stack = createStackNavigator();


export default function App() 
{

  //Valores iniciales del state
  const inicializarState = 
  {
    isLoading: true,
    isSignout: false,
    userToken: null
  }


  //Funcion que permite el manejo del state
  const reducer = (prevState, action) => 
  {
    switch (action.type) 
    {
      case "RESTORE_TOKEN":
        console.log("***** REDUCER RESTORE ***** " + action.token);
        return {
          ...prevState, //Retorna todas las propieades del objeto inicializarState y ACTUALIZA solo la propiedad isLoading y userToken
          userToken: action.token,
          isLoading: false
        };

      case "SIGN_IN":
        console.log("***** REDUCER SIGN_IN *****");
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token
        };

      case "SIGN_OUT":
        console.log("***** REDUCER SIGN_OUT *****");
        return {
          ...prevState,
          isSignout: true,
          userToken: null
        };
      
      default:
        console.log("switch default");
        return state;
    }
  };


  //Creando state....
  const [state, dispatch] = useReducer(reducer, inicializarState);
  

  /**
   * Funcion que permite validar el cliente despues de renderizar la pantalla
   */
  useEffect(() => 
  {
    const loadData = async () => 
    {
      try 
      {
        console.log("***** LOAD DATA *****");
        //Se valida si hay un token en el storage
        let userToken = await SecureStore.getItemAsync("userToken");

        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      } 
      catch (e) 
      {
        Alert.alert("Restoring token failed...");
      }
    };

    loadData();
  }, []);



  /**
   * Hook que contiene las funciones de inicio, cierre y restauración de sesión
   */
  const authContext = useMemo(() => (
  {
    signIn: async (client) => 
    {
      try 
      {
        console.log("***** SIGN_IN *****");
        let {success, userToken} = await clientServices.validateClient(client);
        
        if(success)
        {
          // console.log("Iniciando sesion: ".concat(cliente.tipoCliente));
          //Gurdando token en SecureStore...
          await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
          
          dispatch({ type: "SIGN_IN", token: userToken });
        }
        else
        {
          Alert.alert("Información", "Usuario o Clave invalida.");
        }
      } 
      catch (error) 
      {
        console.log(error);
        Alert.alert("Información", "No es posible consultar el cliente");
      }
    },
    
    signOut: () => 
    {
      console.log("***** SIGN_OUT *****");
      dispatch({ type: "SIGN_OUT" });
      SecureStore.deleteItemAsync("userToken");
    },
    
    signUp: async (client) => 
    {
      try 
      {
        console.log("***** SIGN_UP *****");
        let {success, userToken} = await clientServices.registerCliente(client);
        
        if(success)
        {
          //Gurdando token en SecureStore...
          await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));

          dispatch({ type: "SIGN_IN", token: userToken });
        }
        else
        {
          Alert.alert("Información", "El correo electrónico ingresado ya está registrado. Por favor ingrese otro.");
          //Alert.alert("Información", "Ingresaste un direccion de email que ya esta registrada en , Si ya eres miembro, haz clic en Iniciar sesion");
        }
      } 
      catch (error) 
      {
        Alert.alert("Información", "No es posible registrar el cliente");
      }
    },
  }),
  []
  );


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          (state.isLoading) ?
            (<Stack.Screen name="Splash" component={SplashScreen} />) 
          :  
          (state.userToken === null) ?
            (<Stack.Screen name="MenuAutentication" component={MenuAuthentication} options={{animationTypeForReplace: state.isSignout ? 'pop' : 'push'}}/>)
            :
            (<Stack.Screen name="MenuHome" component={MenuHome} />)
        }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
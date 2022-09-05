
// import * as React from 'react'; 
import { Image, Icon } from 'react-native'; 
import { NativeBaseProvider, Box, VStack, Center, Divider, Heading, Text } from "native-base";

import styles from './stylesLogin';
// import ContextoAutenticacion from '../../../ContextoAutenticacion';



//Componente Funcional
const Login = () =>
{
  // const [login, setLogin] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [isMostrar, setIsMostrar] = React.useState(false);
  
  // const { iniciarSesion } = React.useContext(ContextoAutenticacion);
  
  return (
    <NativeBaseProvider>
      {/* <Box flex={0.3} bg="light.400" alignItems="flex-start" justifyContent="center">
        <Center bg="error.600">
          <Text style={styles.text}>Iniciar Sesión</Text>
          <Text style={styles.text}>ivan</Text>
        </Center>
        <Image source={{ uri:"https://drive.google.com/uc?id=1tp7sy2gjRhMvSD0ka8rgANUA82t10ujQ"}} style={styles.logoApp} />
      </Box> */}
      <Center flex={1}>

        <Box bgColor="muted.600" borderRadius="xl" w="80%" h="40" alignItems="center" >
            <Text  w="90%" color="white" p="2">
              Titulo
            </Text>
            <Divider my="2" />
            <Box w="40" alignItems="center" justifyContent="center">
              <Heading mx="3" alignItems="center" flexDirection="row">
                Chrome
              </Heading>
              <Divider my="2" />
              <Heading mx="3" alignItems="center" flexDirection="row">
                Firefox
              </Heading>
            </Box>
        </Box>
      </Center>
    </NativeBaseProvider>
  ); 
}

// alignItems="center" justifyContent="center" justifyItems="center" 

export default Login;

// <Label style={styles.textSuscripcion} onPress={() => this.setState({isMostrar: !this.state.isMostrar})}>Primera vez en mi Tienda? Suscribete ya.</Label>

// isMostrar = () => 
//   {
//     if(this.state.isMostrar)
//     {
//       this.setState({isMostrar: false})
//     }
//     else
//     {
//       this.setState({isMostrar: true})
//     }
//   };

// const onPressTitle = () => 
// {
//   Alert.alert("title pressed");
// };



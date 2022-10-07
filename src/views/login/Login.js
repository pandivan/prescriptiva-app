import React, { useState, useContext } from "react";
import { Box, Icon, Image, Pressable, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, StatusBar, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import AuthContext from '../../contexts/AuthContext';



/**
 * Componente Funcional que se encarga de loguear al usuario
 * @param navigation Componente de navegación
 * @returns Scren Login
 */
const Login = ({navigation}) =>
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [show, setShow] = useState(false);
  
  //Hook que permite invocar al metodo signIn(useMemo) del App.js
  const { signIn } = useContext(AuthContext);


  /**
   * Función que permite validar los datos del formulario
   */
  const validateForm = () =>
  {
    let isValidForm = true;

    if("" === email)
    {
      isValidForm = false;
      console.log("Validate Form email")
      setIsRequiredEmail(true);
      setErrorMessageEmail("Ingresa un correo electrónico");
    }

    if("" === password)
    {
      isValidForm = false;
      console.log("Validate Form password")
      setIsRequiredPassword(true);
    }

    if(isValidForm)
    {
      console.log("**** LOGIN OK *****");
      signIn({ email, password });
    }
  }


  return (
    <Box flex={1}>
      <StatusBar barStyle="light-content" backgroundColor="#1B2028" />
      <Center flex={1} backgroundColor="#1b2028" borderColor_="green.500" borderWidth_="3">
        <Box safeArea p="2" width="90%" mb="20" maxW="290" borderColor_="red.500" borderWidth_="1">
          
          <Center mt="10" borderColor_="yellow.500" borderWidth_="1">
            <Image source={require('../../../assets/Logo_Login.png')} alt="Alternate Text" resizeMode="contain" width={48} height={32}/>
            
            <Heading size="lg" fontWeight="600" color="white">
              Iniciar Sesión
            </Heading>
          </Center>

          <VStack space={3} mt="10" borderColor_="blue.500" borderWidth_="3">
            <FormControl isRequired={isRequiredEmail} isInvalid={isRequiredEmail}>
              <FormControl.Label>Correo</FormControl.Label>
                <Input value={email} onChangeText={setEmail} color="white" borderRadius="lg" backgroundColor="#0F1319" borderColor="#0F1319" _focus={{borderColor:"#553AB6"}}/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errorMessageEmail}
                </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isRequired={isRequiredPassword} isInvalid={isRequiredPassword}>
              <FormControl.Label>Contraseña</FormControl.Label>
                <Input  value={password} onChangeText={setPassword}
                        type={show ? "text" : "password"} 
                        InputRightElement=
                        {
                          <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                          </Pressable>
                        }
                        color="white"
                        borderRadius="lg"
                        backgroundColor="#0F1319" 
                        borderColor="#0F1319"
                        _focus={{borderColor:"#553AB6"}}
                />

                <Link _text={{fontSize: "xs", fontWeight: "500", color: "white"}} alignSelf="flex-end" mt="2">
                  Olvidó la Contraseña?
                </Link>
            </FormControl>

            <Button onPress={validateForm} mt="5" backgroundColor="#553AB6" borderRadius="lg" height="44px">
              Ingresar
            </Button>

            {/* <HStack mt="6" justifyContent="center">
              <Link _text={{color: "white", fontWeight: "medium", fontSize: "sm"}} href="#">
                Tienes problemas con tus credenciales?
              </Link>
            </HStack> */}
          </VStack>
        </Box>
      </Center>
    </Box>
  ); 
}


export default Login;
import React, { useState, useContext } from "react";
import { Box, Icon, Pressable, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, StatusBar, WarningOutlineIcon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import AuthContext from '../../contexts/AuthContext';



//Componente Funcional que se encarga de loguear al usuario
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
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Center flex={1} backgroundColor="black" borderColor_="green.500" borderWidth_="3">
        <Box safeArea p="2" py="8" width="90%" maxW="290" borderColor_="red.500" borderWidth_="3">
          <Heading size="lg" fontWeight="600" color="indigo.500">
            Inicio de Sesión
          </Heading>
          {/* <Heading mt="1" _dark={{color: "warmGray.200"}} color="coolGray.600" fontWeight="medium" size="xs">
            Use las credenciales enviadas en el
          </Heading> */}

          <VStack space={3} mt="7" borderColor_="blue.500" borderWidth_="3">
            <FormControl isRequired={isRequiredEmail} isInvalid={isRequiredEmail}>
              <FormControl.Label>Correo</FormControl.Label>
                <Input value={email} onChangeText={setEmail} color="white" />
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
                />

                <Link _text={{fontSize: "xs", fontWeight: "500", color: "indigo.500"}} alignSelf="flex-end" mt="2">
                  Olvidó la Contraseña?
                </Link>
            </FormControl>

            <Button onPress={validateForm} mt="5" colorScheme="indigo">
              Continuar
            </Button>

            <HStack mt="6" justifyContent="center">
              <Link _text={{color: "indigo.500", fontWeight: "medium", fontSize: "sm"}} href="#">
                Tienes problemas con tus credenciales?
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  ); 
}


export default Login;
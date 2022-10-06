import React, { useContext } from "react";
import { VStack, HStack, Box, Heading, Text, Icon, Avatar, Menu } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import AuthContext from "../../contexts/AuthContext";


/**
 * Componente funcional el cual contiene las configuraciones básicas de la app
 * @returns Screen Ajustes
 */
const Settings = ({ navigation }) =>
{

  //Hook que permite invocar al metodo signIn(useMemo) del App.js
  const { signOut } = useContext(AuthContext);


  return (
    <Box flex={1} backgroundColor="#0F1319" borderColor_="green.500" borderWidth_="3">
      <HStack m="3" alignItems="center" pb="3" borderBottomColor="light.400" borderBottomWidth="2">
        <Avatar size="48px" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"}} />
        <Heading fontSize="xl" p="4" pb="3" color="light.50">
          Ivan Hernandez
        </Heading>
      </HStack>
      
      <Menu.Item px="0" mt="8" width="100%" borderColor_="blue.500" borderWidth_="3">
        <HStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="account-circle" />} size={7} mr="2" color="#6133E4" />

          <VStack>
            <Text color="dark.500" fontSize="md" bold>
              Perfil
            </Text>
            <Text color="light.400">
              Descripción Perfil
            </Text>
          </VStack>
        </HStack>
      </Menu.Item>
      
      <Menu.Item px="0" mt="3" width="100%" >
          <HStack alignItems="center" space={2}>
            <Icon as={<MaterialIcons name="exit-to-app" />} size={7} mr="2" color="#6133E4" />
            <Text color="dark.500" fontSize="md" bold onPress={() => signOut()}>
              Cerrar sesión
            </Text>
          </HStack>
      </Menu.Item>
    </Box>
  );
}


export default Settings;
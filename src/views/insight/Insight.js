import * as React from 'react';
import { Keyboard, Platform, Dimensions } from "react-native";
import { Center, NativeBaseProvider, Text, KeyboardAvoidingView, Input, Button, useDisclose, Box } from 'native-base';
import { VictoryPie, VictoryTheme } from 'victory-native';

import data from "../home/data";

var {height, width } = Dimensions.get("window");


/**
 * Componente funcional el cual permite utilizar el insigth de Qlik
 * @returns Screen Insigth
 */
const Insigth = () =>
{
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  
  const getInsight = () =>
  {
    console.log("Consultando");

    Keyboard.dismiss();
  }


  return (
    <NativeBaseProvider>
      <Center flex="1" p="5" backgroundColor="black" justifyContent="flex-end" borderColor_="red.500" borderWidth_="3">
        <VictoryPie
          data={data.dataPie}
          padAngle={5}
          // innerRadius={10}
          cornerRadius={18}
          // animate={true}
          theme={VictoryTheme.material}
          // height={185} 
          width={290}
          // origin={{ y: 100 }}
          // labelRadius={({ innerRadius }) => innerRadius+50 }
          style={{ labels:{fontSize: 10, fontWeight: "bold", fill:"white" }}}
          // padding={{ top:120, bottom:120, left:80, right:80 }}
        /> 
        
        
        <KeyboardAvoidingView height={{base: "auto", lg: "auto"}} behavior={Platform.OS === "ios" ? "padding" : "height"} borderColor_="blue.500" borderWidth_="3">
          <Input type={"text"} width="100%" InputRightElement={<Button size="xs" rounded="none" height="12"> Insigth </Button>} placeholder="Digite su pregunta"/>
        </KeyboardAvoidingView>
        
      </Center>
    </NativeBaseProvider>
  );
}

export default Insigth;

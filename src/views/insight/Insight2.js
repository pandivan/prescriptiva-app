import React, { useEffect, useState } from "react";
import { Keyboard, Platform, Dimensions } from "react-native";
import { Center, NativeBaseProvider, Text, KeyboardAvoidingView, Input, Button, useDisclose, Box, Actionsheet, StatusBar } from 'native-base';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import {Defs, LinearGradient, Stop} from "react-native-svg";

import data from "../home/data";
var {height, width } = Dimensions.get("window");

/**
 * Componente funcional el cual permite utilizar el insigth de Qlik
 * @returns Screen Insigth
 */
const Insigth2 = ({ navigation }) =>
{
  
  const [sizeKeyboardView, setSizeKeyboardView] = useState("60px");
  const [isDataInsight, setIsDataInsight] = useState(false);
  const [questionInsight, setQuestionInsight] = useState("");


  // Hook de nativebase que se utiliza para el manejo de apertura y cerrado de los componentes como popups, actionsheet...
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  
  /**
   *  Función que permite indicarle a React que el componente tiene que hacer algo después de renderizarse
   * en este caso subscribe el evento PRESS del tab navigation para abrir el componente actionsheet
   */
  useEffect(() => 
  {
    const unsubscribe = navigation.addListener('tabPress', (e) => { onOpen(); console.log("Abriendo..");});

    return unsubscribe;
  }, [navigation, onOpen]);


  /**
   * 
   */
  const sendInsight = () =>
  {
    console.log("Consultando");

    Keyboard.dismiss();
    onClose();

    setIsDataInsight(true);
    // if("borrar" === questionInsight)
    // {
    //   setIsDataInsight(false);
    // }
    // else{
    //   setIsDataInsight(true);
    // }
    
    setSizeKeyboardView("60px");
  }

  const teclado = () =>
  {
    console.log("Teclado...");
    setSizeKeyboardView("400px");
  }



  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      
      <Box flex={1} px="3" backgroundColor="black" borderColor_="red.500" borderWidth_="3">
        {
          (isDataInsight) ? 
          (
            <VictoryChart height={280}>
            <Defs>
              <LinearGradient id="gradient1" x1="0%" y1="0%" x2="50%" y2="100%">
                <Stop offset="0%" stopColor="#FFE29F" />
                <Stop offset="40%" stopColor="#FFA99F" />
                <Stop offset="100%" stopColor="#F85D6A" />
              </LinearGradient>
            </Defs>

            <VictoryAxis
              style=
              {{
                //Barra del eje Y
                axis:{ stroke: "transparent" },
                //Etiquetas del eje Y
                tickLabels:{ fill: "#ebe0e1", fontSize: 14 },
                //Descripción eje Y 
                axisLabel:{ fill: "#ebe0e1", padding: 36, fontSize: 15, fontStyle: "italic" },
                //Lineas del eje Y en el plano cartesiano
                grid:{ fill: "#ebe0e1", stroke: "#ebe0e1", strokeWidth: 0.5 }
              }}
              label="Cantidad"
              dependentAxis
            />

            <VictoryAxis 
              label="Ventas Mes"
              style=
              {{ 
                  //Etiquetas del eje X
                  tickLabels:{fill:"#ebe0e1", fontSize: 14}, 
                  //Barra del eje X
                  axis:{stroke: "transparent"}, 
                  //Descripción eje X
                  axisLabel:{padding:35, fill:"#ebe0e1", fontSize:15, fontStyle:"italic"}
              }}
            />
            
            <VictoryBar 
              data={data.dataBar} 
              cornerRadius={2} 
              animate={true}
              //Tope del eje Y
              // domain={{ y: [0, 125] }}
              // categories={{x: ["ene", "feb", "mar", "abr", "may"]}} 
              // alignment="middle"
              // labels={({ datum }) => datum.x}
              // barWidth={5}
              style=
              {{
                data:{stroke: "transparent", strokeWidth: 1, fill: "url(#gradient1)"}
              }}
            />
            </VictoryChart>
          ) 
          :
          (<Text>Pregunte</Text>)
        }
      </Box>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Preguntale a pandi
            </Text>
          </Box>
          <Actionsheet.Item alignItems="flex-end">
            <KeyboardAvoidingView height={sizeKeyboardView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <Input type={"text"} onPressIn={teclado} width="80" InputRightElement={<Button size="xs" rounded="none" height="12" onPress={sendInsight}> Insigth </Button>} placeholder="Digite su pregunta"/>
            </KeyboardAvoidingView>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>        
    </NativeBaseProvider>
  );
}

export default Insigth2;

import React, { useEffect, useState } from "react";
import { Keyboard, Platform, Dimensions } from "react-native";
import { Center, Text, KeyboardAvoidingView, Input, Button, useDisclose, Box, Actionsheet, IconButton, HStack } from 'native-base';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory-native';
import {Defs, LinearGradient, Stop} from "react-native-svg";

import * as SecureStore from "expo-secure-store";
import { AntDesign } from "@expo/vector-icons";

import HeaderFilters from "../../components/HeaderFilters";
import Constants from "../../utilities/Constants";
import data from "../home/data";



/**
 * Componente funcional el cual permite utilizar el insight de Qlik
 * @returns Screen Insight
 */
const Insight = ({ navigation }) =>
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
   * Función que permite indicarle a React que el componente tiene que hacer algo después de renderizarse
   * en este caso subscribe el evento PRESS del tab navigation para abrir el componente actionsheet
   */
  useEffect(() => 
  {
    const unsubscribe = navigation.addListener("tabPress", (e) => { onOpen(); console.log("Abriendo..");});

    return unsubscribe;
  }, [navigation, onOpen]);


  /**
   * Funcion que permite cargar los puntos de venta asociados al vendedor
   */
  useEffect(() => 
  {
    console.log("useEffect Insight");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los puntos de venta del storage
        let lstPointsSale = await SecureStore.getItemAsync("lstPointsSale");

        if (null !== lstPointsSale)
        {
            // Se adiciona el componente HeaderFilters al header de la barra de navegación con los puntos de venta JSON.parse(lstPointsSale)
            navigation.setOptions({ headerRight:() => (<HeaderFilters data={JSON.parse(lstPointsSale)} storePointSale={storePointSale} storeUnit={storeUnit}/>) });
        }
      }
      catch (error) 
      {
        console.log("Error al cargar la data (StaticChart)")
      }
    }

    loadData();
    //  loadDailySales("7701001003306", "quantity");
  }, []);
 
 
   /**
    * Función que permite almacenar en el storage el ean del punto de venta seleccionado
    * @para eanPointSale Ean del punto de venta seleccionado
    */
   const storePointSale = async (eanPointSale) => 
   {
     console.log("storePointSale--> " + eanPointSale);
     try 
     {
       await SecureStore.setItemAsync("eanPointSale", JSON.stringify(eanPointSale));
 
       // loadDailySales(eanPointSale);
     }
     catch(error)
     {
       console.log("error al guardar el eanPointSale (Insight)")
     }
   }
 
 
   /**
    * Función que permite almacenar en el storage la unidad seleccionada [cantidad, valor]
    * @param unit Unidad seleccionada
    */
   const storeUnit = async (unit) => 
   {
     console.log("unit--> " + unit);
     try 
     {
       await SecureStore.setItemAsync("unit", JSON.stringify(unit));
 
       // setUnit(unit);
     }
     catch(error)
     {
       console.log("error al guardar el eanPointSale (Insight)")
     }
   }


  /**
   * 
   */
  const sendInsight = () =>
  {
    console.log("Consultando");

    Keyboard.dismiss();
    onClose();
    setIsDataInsight(true);

    expandKeyboard("60px");
  }


  /**
   * Función que permite expandir el componente de teclado
   */
  const expandKeyboard = (size) =>
  {
    setSizeKeyboardView(size);
  }



  return (
    <Center flex={1} p="2" backgroundColor="#0F1319" justifyContent="flex-start" borderColor_="red.500" borderWidth_="3">
      <Box width="100%" px="2" mt="6" borderColor_="yellow.500" borderWidth_="1">
        <Box mb="8" pt="3" backgroundColor="#1B1F25" borderRadius="10" borderColor_="green.500" borderWidth_="1">
          {
            (isDataInsight) ? 
            (
              <VictoryChart height={280}  padding={{ top:50, bottom:63, left:50, right:50 }}>
              {/* <Defs>
                <LinearGradient id="gradient1" x1="0%" y1="0%" x2="50%" y2="100%">
                  <Stop offset="0%" stopColor="#EB8459" />
                  <Stop offset="40%" stopColor="#F5735D" />
                  <Stop offset="100%" stopColor="#DE6060" />
                </LinearGradient>
              </Defs> */}

              {/* Eje Y */}
              <VictoryAxis
                style=
                {{
                  //Barra del eje Y
                  axis:{ stroke: "transparent" },
                  //Etiquetas del eje Y
                  tickLabels:{ fill: "#ebe0e1", fontSize: 12 },
                  //Descripción eje Y 
                  axisLabel:{ fill: "#ebe0e1", padding: 36, fontSize: 13, fontStyle: "italic" },
                  //Lineas del eje Y en el plano cartesiano
                  grid:{ fill: "#ebe0e1", stroke: "#ebe0e1", strokeWidth: 0.5 }
                }}
                label="Cantidad"
                dependentAxis
              />

              {/* Eje X */}
              <VictoryAxis 
                label="Ventas Mes"
                tickLabelComponent={<VictoryLabel angle={-45}/>}
                style=
                {{ 
                    //Etiquetas del eje X
                    tickLabels:{fill:"#ebe0e1", fontSize: 12}, 
                    //Barra del eje X
                    axis:{stroke: "transparent"}, 
                    //Descripción eje X
                    axisLabel:{padding:45, fill:"#ebe0e1", fontSize:13, fontStyle:"italic"}
                }}
              />
              
              <VictoryBar 
                data={data.dataBar} 
                cornerRadius={2} 
                animate={true}
                style=
                {{
                  data:{stroke: "transparent", strokeWidth: 1, fill: "#DE6060"}
                }}
              />
              </VictoryChart>
            ) 
            :
            null
          }
        </Box>

        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content backgroundColor="#252A37">
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="white">
                Preguntale a cassandra
              </Text>
            </Box>
            <Actionsheet.Item alignItems="center" backgroundColor="#252A37">
              <KeyboardAvoidingView height={sizeKeyboardView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <HStack width="100%" space={1} borderColor_="red.500" borderWidth_="1">
                  <Input 
                    type={"text"} 
                    width="64" 
                    borderRadius="8"
                    borderColor="transparent"
                    backgroundColor="white" 
                    placeholder="Digite su pregunta"
                    placeholderTextColor="#2E3043"
                    onPressIn={() => expandKeyboard("400px")} 
                    // InputRightElement={<Button size="xs" backgroundColor="#553AB6" rounded="none" height="12" onPress={sendInsight}> Insight </Button>}
                  />
                  <IconButton size_="xs" backgroundColor="#553AB6" borderRadius="8" width="12" onPress={sendInsight} _icon={{as: AntDesign, name: "search1", color:"white"}}/>
                </HStack>
              </KeyboardAvoidingView>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>        
      </Box>
    </Center>
  );
}

export default Insight;

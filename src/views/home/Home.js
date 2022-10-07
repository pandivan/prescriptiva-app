import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { VStack, HStack, Center, Box, Heading, Text, Pressable, Image, ScrollView, StatusBar, Button, Spacer } from "native-base";
import { VictoryBar, VictoryPie, VictoryChart, VictoryAxis, VictoryLabel, VictoryZoomContainer, VictoryAnimation, VictoryTheme } from "victory-native";
import { Svg } from "react-native-svg";

import * as SecureStore from "expo-secure-store";

import data from "./data";
import Constants from "../../utilities/Constants";
import indicatorService from "../../services/IndicatorService";
import HeaderFilters from "../../components/HeaderFilters";
import pointSaleService from "../../services/PointSaleService";


var {height, width } = Dimensions.get("window");



/**
 * Componente funcional que contiene los indicadores del home
 * @returns Screen Home
 */
const Home = ({ navigation, route }) =>
{
  const [unit, setUnit] = useState("quantity");
  const [lstDailySales, setLstDailySales] = useState([]);
  const [lstDataIndicator, setLstDataIndicator] = useState([]);


  /**
   * Funcion que permite cargar los puntos de venta asociados al vendedor
   */
  useEffect(() => 
  {
    console.log("useEffect Home");

    const loadData = async () => 
    {
      try 
      {
        //Se obtiene los puntos de venta a traves del api-rest
        let {status, lstPointsSaleBD} = await pointSaleService.getAllPointsSale();

        switch (status)
        {
          case Constants.STATUS_OK:
            // Se adiciona el componente HeaderFilters al header de la barra de navegación con los puntos de venta JSON.parse(lstPointsSale)
            navigation.setOptions({ headerRight:() => (<HeaderFilters data={lstPointsSaleBD} storePointSale={storePointSale} storeUnit={storeUnit}/>) });

            // Se almacenan los puntos de venta en el storage
            await SecureStore.setItemAsync("lstPointsSale", JSON.stringify(lstPointsSaleBD));
            console.log("useEffect RouteHome")
          break;

          case Constants.STATUS_ACCESO_DENEGADO:
            console.log("acceso denegado ap")
          break;

          default:
            //Valida si hubo un error en el api-rest
            //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
            console.log("acceso denegado")
          break;
        }
      }
      catch (error) 
      {
        console.log("Error al cargar la data en RouteHome")
      }
      
      //Se obtienen los puntos de ventas del storage
      // let lstPointsSale = await SecureStore.getItemAsync("lstPointsSale");
    }

    loadData();
    loadDailySales("7701001003306", "quantity");
    
    loadDataIndicator("7701001002804#JUAN CARLOS GONZALEZ#1#quantity");
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

      loadDailySales(eanPointSale);
      loadDataIndicator(eanPointSale.concat("#JUAN CARLOS GONZALEZ#1#").concat(unit));
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (Home)")
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

      setUnit(unit);
    }
    catch(error)
    {
      console.log("error al guardar el eanPointSale (Home)")
    }
  }


  /**
   * Función que permite cargar la data para los indicadores desde el API-REST según el punto de venta seleccionado
   * @param eanPointSale Ean del punto de venta
   */
  const loadDailySales = async (eanPointSale) => 
  {
    try 
    {
      //Se obtiene la data para el indicador de ventas diarias según el punto de venta seleccionado a traves del api-rest
      let { status, lstDailySalesBD } = await indicatorService.loadDailySales(eanPointSale, "KCM ALMACENES EXITO");

      switch (status) 
      {
        case Constants.STATUS_OK:
          setLstDailySales(lstDailySalesBD);
          break;

        case Constants.STATUS_ACCESO_DENEGADO:
          //Si tiene token es porque estoy logueado y debo informar que la sesión expiro
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("Tu sesión ha expirado!!!");
          //    setMostrarPopup(true);
          //  }

          //  autenticacionServices.removerToken();
          console.log("acceso denegado home");
          break;

        default:
          //Valida si hubo un error en el api-rest
          //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
          console.log("acceso denegado");
          break;
      }
    } 
    catch (error) 
    {
      //TODO: Guardar log del error en BD
      console.log("error al obtener la data para el indicador de ventas diarias (Home)");
    }
  };


  const loadDataIndicator = async (sk) => 
  {
    try 
    {
      //Se obtiene la data para el indicador de ventas diarias según el punto de venta seleccionado a traves del api-rest
      let { status, lstDataIndicatorBD } = await indicatorService.loadDataIndicator(sk);

      switch (status) 
      {
        case Constants.STATUS_OK:
          setLstDataIndicator(lstDataIndicatorBD);
          break;

        case Constants.STATUS_ACCESO_DENEGADO:
          //Si tiene token es porque estoy logueado y debo informar que la sesión expiro
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("Tu sesión ha expirado!!!");
          //    setMostrarPopup(true);
          //  }

          //  autenticacionServices.removerToken();
          console.log("acceso denegado home");
          lstDataIndicatorBD = null;
          break;

        default:
          //Valida si hubo un error en el api-rest
          //Si tiene token es porque estoy logueado y debo informar que hubo un error en el backend
          //  if(autenticacionServices.getToken())
          //  {
          //    setMensajePopup("En el momento no es posible acceder a la\ninformación, favor intentarlo más tarde.");
          //    setMostrarPopup(true);
          //  }
          console.log("acceso denegado");
          lstDataIndicatorBD = null;
          break;
      }

      return lstDataIndicatorBD;
    } 
    catch (error) 
    {
      //TODO: Guardar log del error en BD
      console.log("error al obtener la data para el indicador de ventas diarias (Home)");
    }
  };
  
  
  /**
   * Función que permite definir el color del pie según la meta del presupuesto del vendedor
   * @param datum Valor heredado del componente VictoryPie que contiene los valores [x, y] enviados en la data
   * @returns Color
   */
  const validateColor = ({ datum }) => 
  {
    let color = "#6a55be";
    if(datum.y < 30)
    {
      color="red";
    }
    else
    {
      if(datum.y > 30 && datum.y < 60)
      {
        color="orange";
      }
    }
    return datum.x === 1 ? color : "transparent";
  }


  return (
    <Center flex={1} borderColor_="green.500" borderWidth_="3">
      <StatusBar barStyle="light-content" backgroundColor="#1B2028" />

      <Center px="2" backgroundColor="#0F1319" justifyContent="flex-start" alignItems="flex-start" width="100%" borderColor_="red.500" borderWidth_="3">
        <ScrollView maxW="100%" height="100%" pt="1" _contentContainerStyle_={{borderColor:"blue.500", borderWidth:"5"}}>
          
          <Text ml="1" my="3" mb="6" fontSize="27" fontWeight="500" color="white">
            Bienvenido 
          </Text>
          
          {/* Tarjeta que muestra KPI */}
          <Box justifyContent="center" background="#553AB6" width="100%" rounded="10" shadow="3" height="174" mb="5" borderColor_="green.500" borderWidth_="1">
            <Image source={require('../../../assets/Presupuesto.png')} alt="Alternate Text" resizeMode="contain" width_="527" height="174"/>
            {/* <HStack width="100%" space="3" borderColor_="red.500" borderWidth_="1">
              <VStack alignItems="center" borderColor_="red.300" borderWidth_="1">
                <Heading m="1" size="xs" color="white" style={{opacity:0.7}}>
                  Cumplimiento{'\n'} 
                  presupuesto
                </Heading>
                
                <Svg style_={{borderColor:"yellow", borderWidth:2, width:"100%"}}>
                  <VictoryPie
                    animate={true}
                    data={data.dataPie2}
                    innerRadius={53}
                    cornerRadius={25}
                    height={150}
                    width={160}
                    labels={() => null}
                    padding={{ top:10, bottom:10 }}
                    style={{data:{fill: validateColor}}}
                  />
                  <VictoryAnimation duration={1000} data={data.dataPie2}>
                    {(newProps) => {
                      return (
                        <VictoryLabel
                          textAnchor="middle" verticalAnchor="middle"
                          // x={(width/4)-10} y={(height/9)-8}
                          x={80} y={75}
                          text={`${Math.round(newProps.y)}%`}
                          style={{fontSize:35, fill:"white", opacity:0.7}}
                        />
                      );
                    }}
                  </VictoryAnimation>
                </Svg>
              </VStack>
              <Spacer />
              <VStack alignItems="flex-start" width="50%" borderColor_="yellow.300" borderWidth_="1">
                <Text fontSize="md" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                  Prom diario venta
                </Text>
                <HStack ml="5" mt="6" justifyItems="flex-start" alignItems="flex-end" borderColor_="gray.300" borderWidth_="1">
                  <Heading pb="1" pr="1" size="md" color="white" style={{opacity:0.6}}>
                    $
                  </Heading>  
                  <Heading size="xl" color="white" style={{opacity:0.6}}>
                    15 M
                  </Heading>
                </HStack>
                <Heading ml="9" mt="4" size="xl" color="white" style={{opacity:0.6}}>
                  30 K
                </Heading>
                <Heading ml="8" mt="1" fontSize="md" color="white" style={{opacity:0.6}}>
                  Unidades
                </Heading>
              </VStack>
            </HStack> */}
          </Box>
          
          <HStack justifyContent="center" width="100%" space="3" mt="1" px="2" borderColor_="green.600" borderWidth_="1">

            {/* Tarjeta que muestra % de participación por categorías */}
            <Pressable maxW_="40" width="50%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#1b2028" : "#1B1F25"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="13" height="235">
                    <VStack>
                      <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                        % Participación 
                      </Text>
                      <Text ml="2" fontSize="12" mb="3" color="white" borderColor_="gray.300" borderWidth_="3">
                        Por categorías
                      </Text>

                      <Center mt="4" borderColor_="yellow.300" borderWidth_="1">
                        <VictoryPie
                          animate={true}
                          data={lstDataIndicator}
                          y={(data) => data.x}
                          innerRadius={32}
                          height={125}
                          padding={{ top:20, bottom:15, left:5, right:5 }}
                          // labels={({ datum }) => `%${datum.y}`}
                          // labelComponent={<VictoryLabel angle={320}/>}
                          labelRadius={51} //coloca el label mas cerca al centro
                          colorScale={["#FFA836", "#553AB6", "#65D292", "#4DCAFA", "#2E3043"]}
                          style={{labels:{fontSize:10, fill:"white", padding:5}}}
                        />
                      </Center>

                      <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                        $9'000,000 COP
                      </Text>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
            
            {/* Tarjeta que muestra ventas semanales */}
            <Pressable maxW_="48" width="50%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#1b2028" : "#1B1F25"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="13" height="235" borderColor_="blue.500" borderWidth_="1">
                    <VStack>
                      <Text ml="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                        Venta diaria 
                      </Text>
                      <Text ml="2" fontSize="12" mb="3" color="white" borderColor_="gray.300" borderWidth_="3">
                        Última semana
                      </Text>

                      <Center borderColor_="yellow.300" borderWidth_="1">
                        <VictoryChart height={140} width={120} padding={{ top: 2, bottom: 25, left: 7, right: 7 }}>
                          <VictoryBar 
                              data={lstDailySales}
                              x={(dataValue) => dataValue.day_of_week}
                              y={(dataValue) => (unit === "quantity") ? dataValue.quantity : dataValue.total_price}
                              cornerRadius={2} 
                              animate={true}
                              barWidth={5}
                              style={{data: { fill: "#65D292" }}}
                          />
                          <VictoryAxis 
                            tickLabelComponent={<VictoryLabel style={{ fill: "white" }}/>}>
                          </VictoryAxis>
                        </VictoryChart>
                      </Center>

                      <Text mt="3" m="2" fontSize="14" fontWeight="700" color="white" borderColor_="gray.300" borderWidth_="3">
                        $3'000,000 COP
                      </Text>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </HStack>

          <HStack justifyContent="center" width="100%" space="3" mt="3" px_="2" pb="5" borderColor_="green.600" borderWidth_="1">
            {/* Tarjeta que muestra el promedio mensual de venta */}
            <Pressable maxW_="48" width="100%">
            {
              ({ isPressed }) => 
              {
                return (
                  <Box background={isPressed ? "#1b2028" : "#1B1F25"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="13" height="228">
                    <VStack>
                      <Text ml="2" fontSize="16" fontWeight="500" color="white" borderColor_="gray.300" borderWidth_="3">
                        Promedio móvil mensual de venta
                      </Text>

                      <Center borderColor_="yellow.300" borderWidth_="1">
                        <VictoryChart theme={VictoryTheme.material} height={180} width_={120} domainPadding={25} padding={{ top: 15, bottom: 40, left: 43, right: 30 }}>
                          <VictoryBar 
                              data={data.dataBarMovil} 
                              cornerRadius={2} 
                              animate={true}
                              barWidth={20}
                              style={{data:{fill:"#6133E4"}}}
                              labels={({ datum }) => ["Prom", "últimos", `${datum.y} meses`]}
                              labelComponent={<VictoryLabel y={155} verticalAnchor={"start"} style={{fontSize:11, fill:"#71717a"}}/>}
                          />
                          {/* Eje X */}
                          <VictoryAxis style={{axis:{stroke:"#3f3f46"}, grid:{stroke:"transparent"}, tickLabels:{fontSize: 10, fill:"transparent"}, ticks: {stroke: "transparent"}}}/>
                          
                          {/* Eje Y */}
                          <VictoryAxis dependentAxis tickFormat={(t) => `${Math.round(t)}`} style={{axis:{stroke:"transparent"}, grid:{stroke:"#3f3f46"}, ticks: {stroke: "transparent"}}} tickLabelComponent={<VictoryLabel style={{fontSize:12, fill:"#71717a"}}/>} />

                        </VictoryChart>
                      </Center>
                    </VStack>
                  </Box>
                );
              }
            }
            </Pressable>
          </HStack>
        </ScrollView>
      </Center>
    </Center>
  );
}


export default Home;
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { NativeBaseProvider, VStack, HStack, Center, Box, Heading, Text, Pressable, Image, ScrollView, StatusBar } from "native-base";
import { VictoryTheme, VictoryBar, VictoryPie, VictoryLabel } from "victory-native";


import data from "./data";

var {height, width } = Dimensions.get("window");



/**
 * Componente funcional el cual contiene los indicadores del home
 * @returns Screen Home
 */
const Home = () =>
{

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Center flex={1} borderColor_="green.500" borderWidth_="3">
        <Center px="2" backgroundColor="black" justifyContent={"flex-start"} alignItems="flex-start" width="100%" borderColor_="red.500" borderWidth_="3">
          <ScrollView maxW="100%" height="100%" pt="1" _contentContainerStyle_={{borderColor:"blue.500", borderWidth:"5"}}>            
            {/* Tarjeta que muestra las ventas mensuales */}
            <Box background="warning.400" width="100%" p="5" rounded="15" shadow={3} height="192" mb="5" borderColor_="green.500" borderWidth_="3">
              <HStack justifyContent="center" alignContent={"center"} width="100%" space="3" borderColor_="red.500" borderWidth_="3">
                <Image key={"1"} width="50%" resizeMode="cover" source={require("../../../assets/grap1.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3"/>
                <Image key={"2"} width="50%" resizeMode="cover" source={require("../../../assets/grap2.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3"/>
              </HStack>
            </Box>
            
            <HStack justifyContent="center" width="100%" space="3" mt="1" px="2" borderColor_="green.600" borderWidth_="3">
              {/* Tarjeta que muestra el top de categorias */}
              <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
                <Pressable maxW="48" width="100%">
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                        <VStack>
                          <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                            Exito Chipichape
                          </Text>
                          <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                            Top 5 Categorías
                          </Text>

                          <Center borderColor_="yellow.300" borderWidth_="3">
                            <VictoryBar horizontal
                                data={data.dataCategoria} 
                                cornerRadius={2} 
                                animate={true}
                                // sortOrder="descending"
                                // categories={{x: ["ene", "feb", "mar", "abr", "may"]}} 
                                // alignment="middle"
                                // labels={({ datum }) => datum.y}
                                // domainPadding={{ x: 10, y: 5 }}
                                barWidth={5}
                                height={115} 
                                width={120}
                                padding={{ top: 17, bottom: 7, left: 2, right: 30 }}
                                style={{data: { fill: "#67dbe6" }, labels: { fill: "white", fontSize: 10 } }} //#ff4d6a
                                labels={({ datum }) => datum.x}
                                // labelComponent={<VictoryLabel dy={-10} textAnchor={"middle"}/>}
                            />
                          </Center>
                          
                          {/* <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                            21.44
                          </Heading> */}
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </Box>
              
              {/* Tarjeta que muestra ventas semanales */}
              <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
                <Pressable maxW="48" width="100%">
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                        <VStack>
                          <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                            Exito Chipichape
                          </Text>
                          <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                            Ventas Semanal
                          </Text>

                          <Center borderColor_="yellow.300" borderWidth_="3">
                            <VictoryBar 
                                data={data.dataBar} 
                                cornerRadius={2} 
                                animate={true}
                                // categories={{x: ["ene", "feb", "mar", "abr", "may"]}} 
                                // alignment="middle"
                                // labels={({ datum }) => datum.y}
                                // domainPadding={{ x: 10, y: 5 }}
                                barWidth={5}
                                height={115} 
                                width={120}
                                padding={{ top: 2, bottom: 2, left: 7, right: 7 }}
                                style={{data: { fill: "#43bc43" }}} //#ff4d6a
                            />
                          </Center>

                          <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                            3'
                          </Heading>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </Box>
            </HStack>

            <HStack justifyContent="center" width="100%" space="3" mt="3" px="2" pb="5" borderColor_="dark.200" borderWidth_="3">
              <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
                <Pressable maxW="48" width="100%">
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                        <VStack>
                          <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                            Excercise records
                          </Text>
                          <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                            8/20 Outdoor cycle
                          </Text>
                          <Center borderColor_="yellow.300" borderWidth-="3" justifyContent={"center"} height="24">
                            <VictoryPie
                              data={data.dataPie}
                              padAngle={5}
                              // innerRadius={10}
                              cornerRadius={18}
                              // animate={true}
                              theme={VictoryTheme.material}
                              // height={185} 
                              // width={180}
                              // origin={{ y: 100 }}
                              labelRadius={({ innerRadius }) => innerRadius+15 }
                              style={{ labels: { fill: "blue", fontSize: 10, fontWeight: "bold" }}}
                              padding={{ top:120, bottom:120, left:80, right:80 }}
                            />
                          </Center>
                          <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                            21.44
                          </Heading>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </Box>
              
              <Box alignItems="center" width="50%" borderColor_="red.500" borderWidth_="3">
                <Pressable maxW="48" width="100%">
                {
                  ({ isPressed }) => 
                  {
                    return (
                      <Box background={isPressed ? "#444444" : "#303030"} style={{ transform: [{ scale: isPressed ? 0.96 : 1 }]}} p="2" rounded="15" height="224">
                        <VStack>
                          <Text fontSize="md" color="dark.500" borderColor_="gray.300" borderWidth_="3">
                            Heart
                          </Text>
                          <Text fontSize="sm" mb="3" color="dark.400" borderColor_="gray.300" borderWidth_="3">
                            8/23 Heart reat
                          </Text>
                          <Image key={"1"} height="56%" width="100%" resizeMode="cover" source={require("../../../assets/Lineal1.png")} alt={"Alternate Text sm"} borderColor_="blue.700" borderWidth_="3" />
                          <Heading m="1" color="dark.600" borderColor_="gray.300" borderWidth_="3">
                            21.44
                          </Heading>
                        </VStack>
                      </Box>
                    );
                  }
                }
                </Pressable>
              </Box>
            </HStack>
          </ScrollView>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}


export default Home;
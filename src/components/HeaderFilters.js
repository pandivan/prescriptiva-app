import React, { useEffect, useReducer, useMemo, useState } from "react";
import { Button, HStack, Menu, ChevronDownIcon, Text, Center } from "native-base";

import { Fontisto, FontAwesome5 } from "@expo/vector-icons";



/**
 * Componente funcional que permite renderizar los filtros del header del navigator
 * @param props Parametros [metodo press, data] enviados al componente desde el componente padre
 * @returns Componente de filtros compuesto por 2 listas desplegables
 */
const HeaderFilters = (props) =>
{

  return (
    <Center flex_={1}>
      <HStack borderColor_="green.500" borderWidth_="1">
        <Menu 
          width="100%" 
          mt={8}
          rounded="lg"
          backgroundColor="#212224"
          placement={"bottom right"} 
          trigger={triggerProps => 
          {
            return <Button pr="0" backgroundColor="#1B2028" _text={{fontSize:"15px"}} _hover={{bg: "black"}} _pressed={{bg: "#21252B"}} alignSelf="center" endIcon={<ChevronDownIcon size="sm" color="#553AB6" />} {...triggerProps}>Todos</Button>;
          }}
        > 
        {
          props.data.map((pointSale)=>
          {
            return( <Menu.Item key={pointSale.ean_point_sale} _text={{color: "white"}} onPress={() => props.storePointSale(pointSale.ean_point_sale)} borderBottomColor_="dark.400" borderBottomWidth_="1">{pointSale.point_sale_name}</Menu.Item> )
          })
        }
        </Menu>

        <Menu 
          width="100%" 
          mt={8}
          rounded="lg"
          backgroundColor="#212224"
          placement={"bottom right"} 
          trigger={triggerProps => 
          {
            return <Button pr="2" backgroundColor="#1B2028" _text={{fontSize:"15px"}} _hover={{bg: "black"}} _pressed={{bg: "#21252B"}} alignSelf="center" endIcon={<ChevronDownIcon size="sm" color="#553AB6" />} {...triggerProps}>Cantidad</Button>;
          }}>

          <Menu.Item p="2" onPress={() => props.storeUnit("quantity")} borderColor_="blue.500" borderWidth_="1">
            <HStack alignItems="center" space={2} borderColor_="blue.500" borderWidth_="1">
              <FontAwesome5 name="grip-lines" size={20} color="tomato" />
              <Text color="white" borderColor_="green.500" borderWidth_="1">Cantidad</Text>
            </HStack>
          </Menu.Item>

          <Menu.Item p="2" onPress={() => props.storeUnit("value")} ml_="3">
            <HStack alignItems="center" space={2} borderColor_="blue.500" borderWidth_="1">
              <Fontisto name="dollar" size={20} color="green" />
              <Text color="white" borderColor_="green.500" borderWidth_="1">Valor</Text>
            </HStack>
          </Menu.Item>
        </Menu>
      </HStack>
    </Center>
  );
}

export default HeaderFilters;
import * as React from 'react';
import { VStack, HStack, Heading, Divider, Box, Text, Center, ScrollView, ArrowDownIcon, ArrowUpIcon, MinusIcon, Spacer } from 'native-base';


/**
 * Componente funcional que permite renderizar información en una tabla
 * @param props Parametros [data] enviados al componente desde el componente padre
 * @returns Gráfico de línea
 */
const TableChart = (props) =>
{
  return (
    <Box borderColor_="green.500" borderWidth_="1">

      {/* Cabecera de la tabla */}
      <HStack justifyContent="flex-end" borderColor_="blue.500" borderWidth_="1">
        <HStack width="40" space="5" justifyContent="space-between" borderColor_="red.500" borderWidth_="1">
          <Text width="20" color="#0FBBF1" fontSize="14" fontWeight="700" textAlign="left" borderColor_="yellow.500" borderWidth_="1">2022</Text>
          <Text width="20" color="#6133E4" fontSize="14" fontWeight="700" textAlign="left" borderColor_="yellow.500" borderWidth_="1">2021</Text>
        </HStack>
      </HStack>

      <ScrollView height="60%" borderColor_="red.500" borderWidth_="1">
        <VStack mb="72" mt="1" space="1">
          {
            props.data.map(sale =>
            (
              <HStack key={sale.x} justifyContent="space-between" borderColor_="blue.500" borderWidth_="1">
                <HStack space="7" borderColor_="yellow.500" borderWidth_="1">
                  {
                    (sale.current_year_value >= sale.previous_year_value) ?
                      <ArrowUpIcon color="#65D292" />
                    :
                      <ArrowDownIcon color="red.500"/>
                  }
                  <Text width="24" color="white" fontSize="12" textAlign="left">{sale.x}</Text>
                </HStack>

                <HStack width="40" space="5" borderColor_="green.500" borderWidth_="1">
                  <Text width="20" color="white" fontSize="12" textAlign="left" borderColor_="yellow.500" borderWidth_="1">{sale.current_year_value}</Text>
                  <Text width="20" color="white" fontSize="12" textAlign="left" borderColor_="red.500" borderWidth_="1">{sale.previous_year_value}</Text>
                </HStack>
              </HStack>
            ))
          }
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default TableChart;

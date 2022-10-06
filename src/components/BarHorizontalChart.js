import * as React from 'react';
import { Box, Text } from 'native-base';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryLabel } from 'victory-native';
import { Defs, LinearGradient, Stop } from "react-native-svg";
import TableChart from './TableChart';
import GenericFunctions from '../utilities/GenericFunctions';


/**
 * Componente funcional que permite renderizar información en un gráfico de barra horizontal
 * @param props parametros enviados al componente desde el componente padre
 * @returns Gráfico de barra horizontal
 */
const BarHorizontalChart = (props) =>
{

  return (
    <Box width="100%" px="2" mt="6" borderColor_="green.500" borderWidth_="1">
      <Box mb="8" pt="3" backgroundColor="#1B1F25" borderRadius="10" borderColor_="yellow.500" borderWidth_="1">
        <VictoryChart domainPadding={{x:10}} padding={{ top:60, bottom:15, left:90, right:85 }}>
        
        {/* Leyenda de años */}
        <VictoryLegend
          orientation="horizontal"
          gutter={20}
          x={260}
          style={{labels:{fontSize: 12}}}
          data=
          {[
            { name:"2022", symbol: {fill:"#0FBBF1"}, labels:{fill:"white"}}
          ]}
        />

        {/* Leyenda de preuntas */}
        <VictoryLegend
          title={["Top 10", "Productos mas vendidos"]}
          titleComponent={
            <VictoryLabel
              backgroundPadding=
              {[
                {left:2, bottom:3},
                {left:2}
              ]}
              style=
              {[
                {fontSize:16, fill:"white", fontWeight:500},
                {fontSize:12, fill:"white" }
              ]}
            />}
          data={[]}
        />

        <Defs>
          <LinearGradient id="gradient1" x1="0%" y1="0%" x2="50%" y2="100%">
            <Stop offset="0%" stopColor="#4265FD" />
            <Stop offset="40%" stopColor="#3B87E3" />
            <Stop offset="100%" stopColor="#4DCAFA" />
          </LinearGradient>
        </Defs>

        {/* Eje Y */}
        <VictoryAxis
          style=
          {{
              //Barra del eje Y
              axis:{stroke: "white"},
              //Etiquetas del eje Y
              tickLabels:{fill:"#ebe0e1", fontSize: 13}
          }}
        />

        <VictoryBar
          data={props.data}
          y={(data) => data.current_year_value}
          cornerRadius={2}
          animate={true}
          horizontal
          sortKey={(d) => d.current_year_value}
          labels={({ datum }) => GenericFunctions.formatNumber(datum.current_year_value)}
          style=
          {{
            data:{stroke: "transparent", strokeWidth: 1, fill: "url(#gradient1)"},
            labels: { fill: "white" }
          }}
        />
        </VictoryChart>
      </Box>

      <Text color="white" fontSize="16" fontWeight="500" textAlign="left">Resumen Top 10</Text>
      <Text color="white" fontSize="12" fontWeight="400" textAlign="left" mb="3">Últimos 2 años</Text>

      <TableChart data={props.data} />
    </Box>
  );
}

export default BarHorizontalChart;

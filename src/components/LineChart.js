import * as React from 'react';
import { Box, Text } from 'native-base';
import { VictoryLine, VictoryChart, VictoryLabel, VictoryAxis, VictoryLegend } from 'victory-native';
import TableChart from './TableChart';
import GenericFunctions from '../utilities/GenericFunctions';


/**
 * Componente funcional que permite renderizar información en un gráfico de línea
 * @param props Parametros [data] enviados al componente desde el componente padre
 * @returns Gráfico de línea
 */
const LineChart = (props) =>
{

  return (
    <Box width="100%" px="2" mt="6" borderColor_="yellow.500" borderWidth_="1">
      <Box mb="8" pt="3" backgroundColor="#1B1F25" borderRadius="10" borderColor_="yellow.500" borderWidth_="1">
        <VictoryChart domainPadding={{x:[10,10]}} padding={{ top:65, bottom:45, left:45, right:45 }} >
          
          {/* Leyenda de años */}
          <VictoryLegend
            orientation="horizontal"
            gutter={20}
            x={200}
            style={{labels:{fontSize: 12}}}
            data=
            {[
              { name:"2022", symbol: {fill:"#0FBBF1"}, labels:{fill:"white"}},
              { name:"2021", symbol: {fill:"#6133E4"}, labels:{fill:"white"}}
            ]}
          />

          {/* Leyenda de preuntas */}
          <VictoryLegend
            title={["Venta mensual", "Últimos 2 años"]}
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

          {/* Linea de año actual */}
          <VictoryLine 
            data={props.data}
            y={(d) => d.current_year_value}
            animate={true}
            style={{
              data: {
                //Color de la línea
                stroke: "#0FBBF1", 
                //Grosor de la línea
                strokeWidth:5
              }
            }}
          />

          {/* Linea de año anterior */}
          <VictoryLine 
            data={props.data}
            y={(d) => d.previous_year_value}
            animate={true}
            style={{
              data: {
                //Color de la línea
                stroke: "#6133E4", 
                //Grosor de la línea
                strokeWidth:5
              }
            }}
          />

          {/* Eje Y */}
          <VictoryAxis
            style=
            {{
              //Barra del eje Y
              axis:{ stroke: "transparent" },
              //Etiquetas del eje Y
              tickLabels:{ fill: "#ebe0e1", fontSize: 12 },
              //Lineas del eje Y en el plano cartesiano
              grid:{ fill: "#ebe0e1", stroke: "#ebe0e1", strokeWidth: 0.5 }
            }}
            dependentAxis
            tickFormat={(t) => GenericFunctions.formatNumber(t)}
          />

          {/* Eje X */}
          <VictoryAxis
            tickLabelComponent={<VictoryLabel angle={-45}/>}
            style=
            {{ 
                ticks: {stroke: "grey", size: 5},
                //Etiquetas del eje X
                tickLabels:{fill:"#ebe0e1", fontSize: 12}, 
                //Barra del eje X
                axis:{stroke: "transparent"},
            }}
          />
        </VictoryChart>
      </Box>
          
      <Text color="white" fontSize="16" fontWeight="500" textAlign="left">Resumen de venta mensual</Text>
      <Text color="white" fontSize="12" fontWeight="400" textAlign="left" mb="3">Últimos 2 años</Text>

      <TableChart data={props.data} />
    </Box>
  );
}

export default LineChart;

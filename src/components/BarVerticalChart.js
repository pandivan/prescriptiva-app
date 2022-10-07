import * as React from 'react';
import { Box } from 'native-base';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLegend, VictoryLabel } from 'victory-native';


/**
 * Componente funcional que permite renderizar información en un gráfico de barra
 * @param props parametros enviados al componente desde el componente padre
 * @returns Gráfico de barra vertical
 */
const BarVerticalChart = (props) =>
{
  return (
    <Box width="100%" px="2" mt="6" borderColor_="yellow.500" borderWidth_="1">
      <Box mb="8" pt="3" backgroundColor="#1B1F25" borderRadius="10" borderColor_="green.500" borderWidth_="1">
        <VictoryChart height={280} padding={{ top:50, bottom:63, left:50, right:50 }}>
          
          {/* Leyenda de años */}
          <VictoryLegend
            orientation="horizontal"
            gutter={20}
            x={260}
            style={{labels:{fontSize: 12}}}
            data=
            {[
              { name:"2022", symbol: {fill:"#65D292"}, labels:{fill:"white"}}
            ]}
          />

          {/* Leyenda de preuntas */}
          <VictoryLegend
            title={["Venta mensual", "Último año"]}
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
            data={props.data} 
            cornerRadius={2} 
            animate={true}
            style=
            {{
              data:{stroke: "transparent", strokeWidth: 1, fill: "#65D292"}
            }}
          />
        </VictoryChart>
      </Box>
    </Box>
  );
}

export default BarVerticalChart;

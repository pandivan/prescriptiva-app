import * as React from 'react';
import { Keyboard, Platform, Dimensions } from "react-native";
import { Center, Text, KeyboardAvoidingView, Input, Button, useDisclose, Box } from 'native-base';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryContainer,VictoryPie, VictoryAnimation } from 'victory-native';
import {Defs, LinearGradient, Stop, Svg, Circle} from "react-native-svg";

import data from "../home/data";

var {height, width } = Dimensions.get("window");


/**
 * Componente funcional que permite utilizar el insight de Qlik
 * @returns Screen Insight
 */
const Borrar = ({ navigation }) =>
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

  /**
   * Función que permite definir el color del pie según la meta del presupuesto del vendedor
   * @param datum Valor heredado del componente que contiene los valores [x, y] enviados en la data
   * @returns Color
   */
  const validateColor = ({ datum }) => 
  {
    let color = "green";
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
    <Center flex="1" p="5" backgroundColor_="black" justifyConten_="flex-end" borderColor="red.500" borderWidth="3">
      <Button onPress={() => navigation.navigate("ZoomInsight")}>
        Go to Detailsss
      </Button>

      <Svg>
        <VictoryPie
          animate={true}
          data={data.dataPie2}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          height={300}
          _width={width}
          origin={{ x:width-200, y:height/5 }}
          _padding={{ top:10, bottom:15, left:5, right:5 }}
          style={{
            data: 
            { 
              fill: validateColor
            }
          }}
        />
        <VictoryAnimation duration={1000} data={data.dataPie2}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={width-200} y={height/5}
                text={`${Math.round(newProps.y)}%`}
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </Svg>

    </Center>
  );
}

export default Borrar;

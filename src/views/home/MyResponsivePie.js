import { VictoryChart, VictoryBar, VictoryTheme, VictoryLegend,VictoryLabel, VictoryPie } from "victory-native";
import { VStack, HStack, Center, useTheme, Box, Heading, Text, Pressable, Spacer, Image, ScrollView } from "native-base";
import { Dimensions, StyleSheet } from 'react-native';

import data from './data';


const MyResponsivePie = () => 
{

  return (
    // <Center borderColor="yellow.300" borderWidth="3" >
    <Center backgroundColor_="black" width="100%" borderColor="red.500" borderWidth="3">
    
      <VictoryPie
        data={data.dataPie}
        padAngle={5}
        // innerRadius={100}
        cornerRadius={18}
        // animate={true}
        theme={VictoryTheme.material}
        // height={180}
        // width={180}
        // origin={{ y: 100 }}
        padding={{ top:130, bottom:130, left:80, right:80 }}
      />
    </Center>
  );
}

export default MyResponsivePie;
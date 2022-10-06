import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "native-base";

import StaticChart from "../views/insight/StaticChart";
import Insight from "../views/insight/Insight";
import Home from "../views/home/Home"
import Settings from "../views/configuration/Settings";



const Tab = createBottomTabNavigator();


/**
 * Componente funcional el cual contiene los tabs de navegación del home
 * @returns Tab de navegación del home
 */
const RouteHome = ({ navigation, route }) => 
{
  console.log("useEffect RouteHome");

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions=
      {{
        headerShown:true,
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"#999999",
        tabBarLabelStyle:{fontSize: 13},
        headerStyle:{ backgroundColor:"#1b2028"},
        tabBarStyle:{ height:50, paddingBottom:4, paddingTop:4, backgroundColor:"#0F1319", borderTopColor:"white", borderTopWidth:0.2 },
        headerLeft: () => (<Image ml={3} source={require('../../assets/LogoHeader.png')} alt="Alternate Text" resizeMode="contain" width={32} height={9}/>)
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options=
        {{
          headerTitle:"", 
          headerTitleStyle:{color:"#afafaf"},
          tabBarLabel:"Home",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="StaticChart"
        component={StaticChart}
        options=
        {{
          headerTitle:"", 
          headerTitleStyle:{color:"#afafaf"},
          tabBarLabel:"Consultas",
          tabBarIcon:({ color, size }) => (
            <MaterialIcons name="insights" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Insight"
        component={Insight}
        options=
        {{
          headerTitle:"", 
          headerTitleStyle:{color:"#afafaf"},
          tabBarLabel:"Insight",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="robot-confused-outline" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options=
        {{
          headerTitle:"", 
          headerTitleStyle:{color:"#afafaf"},
          tabBarLabel:"Ajustes",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default RouteHome;
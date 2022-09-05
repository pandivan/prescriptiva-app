import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Insight from "../views/insight/Insight";
import Insight2 from "../views/insight/Insight2";
import Home from "../views/home/Home"


const Tab = createBottomTabNavigator();

/**
 * Componente funcional el cual contiene los tabs de navegación del home
 * @returns Tab de navegación del home
 */
const MenuHome = () => 
{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions=
      {{
        tabBarActiveTintColor:"tomato",
        tabBarLabelStyle:{fontSize: 16},
        // headerShown:false,
        headerStyle: { backgroundColor: "black", borderBottomWidth:5, borderBottomColor:"black"},
        tabBarStyle:{ backgroundColor: "#303030", borderTopWidth:0 },
        // tabBarInactiveBackgroundColor:"#303030",
        // tabBarActiveBackgroundColor:"blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options=
        {{
          tabBarLabel:"Home",
          title: "Cassandra",
          headerTintColor: "#afafaf",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Insight"
        component={Insight}
        options=
        {{
          tabBarLabel:"Insight",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />

      <Tab.Screen
        name="Insight2"
        component={Insight2}
        options=
        {{
          tabBarLabel:"Insight2",
          title: "Insight",
          headerTintColor: "#afafaf",
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MenuHome;
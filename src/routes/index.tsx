import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Stack = createStackNavigator();

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "ALUGUE",
            headerTitleStyle: { fontFamily: "Montserrat_700Bold" },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: "ALUGUE",
            headerTitleStyle: { fontFamily: "Montserrat_700Bold" },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
          name="detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routes;

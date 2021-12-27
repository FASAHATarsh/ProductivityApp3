  import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from "@expo/vector-icons";
import Home from "./screens/HomeScreen";
import Challenge from "./screens/ChallengeScreen";
import ToDo from "./screens/ToDoScreen";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTransparent: true,
            title: "",
          
            headerLeft: () => (
              <Image
                source={require("./assets/user.png")}
                style={{ marginLeft:9, width: 75, height: 75 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <Image
                source={require("./assets/user.png")}
                style={{ marginLeft: 9, width: 75, height: 75 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <Image
                source={require("./assets/user.png")}
                style={{ marginLeft: 9, width: 75, height: 75 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

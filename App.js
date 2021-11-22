import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginProfissional from "./src/loginProfissional/index";
import ListaServicos from "./src/lista_servicos/index";
import EscolherLogin from "./src/escolha_login/index";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EscolherLogin"
        component={EscolherLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginProfissional"
        component={LoginProfissional}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaServicos"
        component={ListaServicos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

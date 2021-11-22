import * as React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
function EscolherLogin({ navigation }) {
  function entrar() {
    navigation.navigate("LoginProfissional");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../img/Freelancerizi.png")} />
      <TouchableOpacity style={styles.buttonArea} onPress={() => {navigation.navigate("LoginProfissional")}}>
        <Text style={styles.textButton}>Entrar como profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonArea1}>
        <Text style={styles.textButton}>Entrar como Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}
export default EscolherLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F5856",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: "100%",
  },
  buttonArea: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8C89C",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation:24,
    marginTop:150
  },
  textButton: {
    fontSize: 18,
  },
  buttonArea1: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8C89C",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation:24,
    marginTop:50
  },
  
});

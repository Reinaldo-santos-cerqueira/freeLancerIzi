import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function LoginProfissional({ navigation }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function entrar() {
    navigation.navigate("Servicos");
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../img/Freelancerizi.png")}
      />
      <Text style={styles.textEntrada}>Login como profissional</Text>
      <View style={styles.inputAreaEmail}>
        <Entypo name="mail" size={24} color="#E8c89c" />
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu email"
          placeholderTextColor="#E8c89c"
          keyboardType="email-address"
          value={inputEmail}
          onChangeText={(text) => {
            setInputEmail(text);
          }}
        />
      </View>
      <View style={styles.inputAreaPassWord}>
        <Ionicons name="key-outline" size={24} color="#E8c89c" />
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua senha"
          placeholderTextColor="#E8c89c"
          keyboardType="email-address"
          value={inputPassword}
          onChangeText={(text) => {
            setInputPassword(text);
          }}
        />
      </View>
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.textTouchableOpacity}>
          Problemas de acesso?Clique aqui
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity2}>
        <Text style={styles.textTouchableOpacity}>
          Não possui conta?Clique aqui
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacityLogin}
        onPress={() => {
          navigation.navigate("ListaServicos");
        }}
      >
        <Text style={styles.textTouchableOpacityLoginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  textEntrada: {
    fontSize: 30,
    color: "#E8C89C",
    marginTop: 30,
  },
  inputAreaEmail: {
    width: "100%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E8C89C",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    marginTop: 30,
  },
  textInput: {
    fontSize: 20,
    color: "#E8C89C",
    marginLeft: 20,
  },
  inputAreaPassWord: {
    width: "100%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E8C89C",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  touchableOpacity: {
    width: "100%",
    marginTop: 15,
  },
  textTouchableOpacity: {
    textAlign: "right",
    color: "#E8C89C",
  },
  touchableOpacity2: {
    width: "100%",
  },
  touchableOpacityLogin: {
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

    elevation: 24,
    marginTop: 20,
  },
  textTouchableOpacityLoginText: {
    fontSize: 20,
  },
});

export default LoginProfissional;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  login = async (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("TabNavigator");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#FFE668",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 65,
            fontWeight: "bold",
            marginTop: 20,
            color: "#FF7C84",
          }}
        >
          Story Hub
        </Text>
        <Image
          source={require("../assets/logo.jpg")}
          style={{ width: 300, height: 300, marginTop: 20 }}
        />
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="Registered ID"
            placeholderTextColor="black"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 33,
              width: 100,
              borderWidth: 1.5,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: "#FF7C84",
            }}
            onPress={() => {
              this.login(this.state.emailId, this.state.password);
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 2,
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Header } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import db from "../config.js";

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    this.setState({
      title: "",
      author: "",
      story: "",
    });
    ToastAndroid.showWithGravity(
      "Your story has been Submitted!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#FFE668"}
          centerComponent={{
            text: "Story Hub",
            style: { color: "#FF7C84", fontSize: 47, fontWeight: "bold" },
          }}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Title"
          placeholderTextColor="black"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Author"
          placeholderTextColor="black"
          value={this.state.author}
          onChangeText={(text) => this.setState({ author: text })}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Start Writing"
          placeholderTextColor="black"
          multiline={true}
          value={this.state.story}
          onChangeText={(text) => this.setState({ story: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    justifyContent: "center",
    width: 410,
    height: 50,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    backgroundColor: "#FFE668",
  },
  storyBox: {
    justifyContent: "center",
    width: 410,
    height: 440,
    borderWidth: 3,
    fontSize: 20,
    marginTop: 5,
    textAlign: "center",
    backgroundColor: "#FFE668",
  },
  submitButton: {
    backgroundColor: "#FFE668",
    width: 100,
    height: 40,
    alignSelf: "center",
    marginTop: 10,
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
    color: "#FF7C84",
  },
});

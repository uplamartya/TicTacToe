import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.rootView}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E5B143",
            borderTopRightRadius: 150
          }}
        >
          <Text style={{ fontSize: 20, color: "#000" }}>WELCOME</Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>TIC TAC TOE</Text>
            <Text style={{ color: "#000", fontSize: 20 }}>!</Text>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E5B143"
          }}
        >
          <TouchableOpacity
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            onPress={() => this.props.navigation.replace("Home")}
          >
            <Text style={{ fontSize: 20, color: "#000" }}>START GAME</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#000"
  }
});

export default Splash;

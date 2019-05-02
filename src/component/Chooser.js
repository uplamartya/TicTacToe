import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import Card from "./Card";

export class chooser extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = { Player1: "", Player: "" };
  }

  render() {
    return (
      <View style={styles.root}>
        <Card>
          <View>
            <Item floatingLabel style={{ marginVertical: 5 }}>
              <Label style={{ color: "#000", paddingVertical: 20 }}>
                Player 1
              </Label>
              <Input
              
                onChangeText={text => {
                  this.setState({ Player1: text });
                }}
              />
            </Item>
            <Item floatingLabel style={{ marginVertical: 5 }}>
              <Label style={{ color: "#000" }}>Player 2</Label>
              <Input />
            </Item>
          </View>

          <View
            style={{
              padding: 5,
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: 15,
              alignItems: "center",
              position: "relative"
            }}
          >
            <Text style={{ color: "#000" }}>Enjoy the Game!!</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 50
              }}
              onPress={() => this.props.navigation.replace("Home")}
            >
              <Icon name={"chevron-right"} size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5B143",
    flex: 1
  }
});
export default chooser;

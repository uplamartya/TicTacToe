import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableHighlight
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Button } from "native-base";

let ItemArray = new Array(9).fill("empty");
export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    this.setModalVisible(true);
  }

  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",
      visible: true,
      timer: 30,
      modalVisible: false,
      showAlert: false,
      timerLeft: 10
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  drawItem = itemNumber => {
    if (ItemArray[itemNumber] === "empty") {
      ItemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !ItemArray[itemNumber] }, () => {});
    }

    this.winGame();
  };

  chooseItemIcon = itemNumber => {
    if (ItemArray[itemNumber] !== "empty") {
      return ItemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
  };

  chooseItemColor = itemNumber => {
    if (ItemArray[itemNumber] !== "empty") {
      return ItemArray[itemNumber] ? "black" : "black";
    }
    return "black";
  };

  resetGame = () => {
    ItemArray.fill("empty");
    this.setState({ winMessage: "" });
    //force update to the component
    this.forceUpdate();
  };
  timer = () => {
    var downloadTimer = setInterval(function() {
      this.state.timerLeft -= 1;
      if (this.state.timerLeft <= 0) {
        clearInterval(downloadTimer);
        this.state.isCross = !isCross;
      }
    }, 1000);
  };
  winGame = () => {
    if (
      ItemArray[0] !== "empty" &&
      ItemArray[0] == ItemArray[1] &&
      ItemArray[1] == ItemArray[2]
    ) {
      this.setState({
        winMessage: (ItemArray[0] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[3] !== "empty" &&
      ItemArray[3] == ItemArray[4] &&
      ItemArray[4] == ItemArray[5]
    ) {
      this.setState({
        winMessage: (ItemArray[3] ? "cross" : "circle").concat(" win")
      });
    } else if (
      ItemArray[6] !== "empty" &&
      ItemArray[6] == ItemArray[7] &&
      ItemArray[7] == ItemArray[8]
    ) {
      this.setState({
        winMessage: (ItemArray[6] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[0] !== "empty" &&
      ItemArray[0] == ItemArray[3] &&
      ItemArray[3] == ItemArray[6]
    ) {
      this.setState({
        winMessage: (ItemArray[0] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[1] !== "empty" &&
      ItemArray[1] == ItemArray[4] &&
      ItemArray[4] == ItemArray[7]
    ) {
      this.setState({
        winMessage: (ItemArray[1] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[2] !== "empty" &&
      ItemArray[2] == ItemArray[5] &&
      ItemArray[5] == ItemArray[8]
    ) {
      this.setState({
        winMessage: (ItemArray[2] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[0] !== "empty" &&
      ItemArray[0] == ItemArray[4] &&
      ItemArray[4] == ItemArray[8]
    ) {
      this.setState({
        winMessage: (ItemArray[0] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[2] !== "empty" &&
      ItemArray[2] == ItemArray[4] &&
      ItemArray[4] == ItemArray[6]
    ) {
      this.setState({
        winMessage: (ItemArray[2] ? "cross" : "circle").concat("win")
      });
    } else if (
      ItemArray[0] !== "empty" &&
      ItemArray[1] !== "empty" &&
      ItemArray[2] !== "empty" &&
      ItemArray[3] !== "empty" &&
      ItemArray[4] !== "empty" &&
      ItemArray[5] !== "empty" &&
      ItemArray[6] !== "empty" &&
      ItemArray[7] !== "empty" &&
      ItemArray[8] !== "empty"
    ) {
      this.setState({
        winMessage: "Draw!!"
      });
    }
  };
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
      isDisabled: false
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button
          full
          bordered
          rounded
          style={styles.button}
          onPress={this.resetGame}
        >
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5B143",
    justifyContent: "center",
    alignItems: "center"
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 30
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  timeout: {
    padding: 15,
    marginHorizontal: 10
  },
  timeoutText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal3: {
    height: 300,
    width: 300
  }
});

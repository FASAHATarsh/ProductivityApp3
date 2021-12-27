import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class Card extends Component {
  render() {
    return (
      <View
        style={styles.cardone}
      >
        <TouchableOpacity style={styles.cardone}  onPress={()=>this.props.navigation.navigate('ToDo')}>
          <View style={styles.box1}>
            <FontAwesome name="anchor" size={32} color="#1b1b2f" />
          </View>
        
        <View style={styles.box2}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "300" }}>
           {this.props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "black",
              letterSpacing: -0.5,
              paddingVertical: 5,
            }}
          >
           {this.props.subtitle}
          </Text>
        </View>
        <View style={styles.box3}>
          <View
            style={{
              flex: 1,
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#f08a5d" }}
            >
             
            </Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardone: {
    flex: 1,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    
  },
  cardtwo: {
    flex: 1,
  },
  box1: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  box2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1.25,
  },
  box3: {
    flex: 1,
  },
});

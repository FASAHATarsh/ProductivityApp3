import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import ChallengeCard from "../components/ChallengeCard";
import ToDoCard from "../components/ToDoCard";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.firstContainer}>
          <View style={styles.firstSection}></View>
          <View style={styles.secondSection}>
            <Text style={styles.name}>Hello..</Text>
            <Text style={styles.subtitle}>Something Will come here</Text>
          </View>
          <View style={styles.thirdSection}>
            <ImageBackground
              source={require("../assets/chart.png")}
              style={{
                width: "100%",
                height: 250,
              }}
            />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.line}></View>
          <View style={styles.progress}>
            <Text style={[styles.textone]}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            <ChallengeCard
              title="Challenges"
              subtitle="7 out of 10 challenges"
              navigation={this.props.navigation}
            />
            <ToDoCard
              title="To Do"
              subtitle="Complete Your Tasks"
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#6144ea",
  },
  firstContainer: {
    flex: 1.5,
  },
  firstSection: {
    flex: 1,
  },
  secondSection: {
    flex: 0.8,
    marginLeft:20,
    
  },
  thirdSection: {
    flex: 2.5,
    justifyContent: "center",
  },
  fourthSection: {
    flex: 0.5,
    color: "#f6f6f6",
    flexDirection: "row",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "#fff7f0",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  name: {
    fontSize: 38,
    color: "#fff7f0",
    fontWeight: "bold",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: "#fff7f0",
  },
  line: {
    width: "20%",
    height: 8,
    backgroundColor: "black",
    borderRadius: 4,
    marginVertical: "4%",
    left: "40%",
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: "black",
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    width: "90%",
    marginTop: 10,
    marginHorizontal: 30,
  },
});

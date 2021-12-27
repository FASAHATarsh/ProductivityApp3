import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.square}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff7f0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#6144ea',
    borderWidth: 3,
    borderRadius: 5,
    marginRight: 15,

  },
  itemText: {
    maxWidth: '80%',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#f33114',
    opacity: 1,
    borderRadius: 5,
   

  },
});

export default Task;
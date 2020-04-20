import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';

const GoalItem = props=>{
  return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this,props.id)} >
    <View style={styles.listitem}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listitem:{
      padding:10,
      margin:10,
      backgroundColor:'black',
      borderColor:'black',
      borderWidth:1
  },
  text:{
    textAlign: 'center',
    color:'white'
  }
});

export default GoalItem;

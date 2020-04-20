import React,{ useState } from 'react';
import { StyleSheet,View,TextInput,Button,Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
  setEnteredGoal(enteredText);
  };

  const addGoalHandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return(
    <Modal visible={props.visible} animationType="fade">
    <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.button}>
          <View style={styles.buttonsize}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View >
          <View style={styles.buttonsize}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  input:{
      width:'80%',
      borderColor:'black',
      borderWidth:1,
      padding:10,
      marginBottom: 10
    },
  button:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width:'60%'
  },
  buttonsize:{
      width: '40%'
  }

  });

  export default GoalInput;

import React, { useState } from 'react';
import { StyleSheet,View ,Button,FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
    const [courseGoals,setCourseGoals] = useState([]);
    const [isAddMode,setIsAddMode] = useState(false)

    const addGoalHandler = goalTitle => {
    title = goalTitle;
    if (title==='')
    {
      setIsAddMode(false);
    }
    else {
      setCourseGoals(currentGoals  => [...currentGoals,{id: Math.random().toString(), value:title}]);
      setIsAddMode(false);
    }

    };

    const removeGoal = goalId =>{
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !=goalId );
      });
    };

    const cancelGoalAddHandler = () =>{
      setIsAddMode(false);
    };

    return (
    <View style = {styles.container}>
      <Button title="Add new Goal" onPress={()=> setIsAddMode(true)} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
        <FlatList
        data = {courseGoals}
        keyExtractor = {(item,index)=> item.id}
        renderItem = {itemData => <GoalItem id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value} />}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        padding:50
    }
});

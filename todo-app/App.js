import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddToDo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy cofee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'plan on the switch', key: '3' },
  ])

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: Math.random().toString() }
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

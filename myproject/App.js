import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('React')
  const [age, setAge] = useState('25')
  const [person, setPerson] = useState({ name: 'mario', age: 40 })

  const clickHandle = () => {
    if (name == 'React') {
      setName('React Native')
      setPerson({ name: 'luige', age: 45 })
    } else {
      setName('React')
      setPerson({ name: 'mario', age: 40 })
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>My name is {name} Age: {age}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update state' onPress={clickHandle} />
      </View>
      <Text></Text>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='React'
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age: </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 5'
        onChangeText={(val) => setAge(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('React')
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
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update state' onPress={clickHandle} />
      </View>
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
  }
});

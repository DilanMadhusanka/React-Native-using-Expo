import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {

  // when object is contained key as well as id do't want to use keyExtractor
  const [people, setPeople] = useState([
    { name: 'shaun', userId: '1' },
    { name: 'yoshi', userId: '2' },
    { name: 'mario', userId: '3' },
    { name: 'luigi', userId: '4' },
    { name: 'peach', userId: '5' },
    { name: 'toad', userId: '6' },
    { name: 'bowser', userId: '7' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.userId}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});

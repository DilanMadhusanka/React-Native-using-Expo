import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global/'

export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        { title: 'Sherklok Homes', rating: 5 , body: 'this is the fiction story', key: '1' },
        { title: 'The Blood', rating: 4 , body: 'this is the short story', key: '2' },
        { title: 'Ape Gama', rating: 3 , body: 'this is the novel story', key: '3' }
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Item (props) {
    const styles = StyleSheet.create({
        card: {
            border: '1px solid #000',
            borderRadius: 10,
            backgroundColor: '#aaa',
            marginBottom: 5,
            marginTop: 5,
            borderWidth: 1,
            borderColor: '#aaa',
            padding: 10
        },
        notCompleted: {
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'red',
            padding: 10,
            backgroundColor: '#fff',
            borderColor: 'red',
            color: 'red'
        },
        completed: {
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'green',
            padding: 10,
            backgroundColor: '#fff',
            color: 'green !important'
        }
    })
    return (
        <View style={props.isCompleted == true ? styles.completed: styles.notCompleted}>
            <Text>{props.title}</Text>
            <Text>{props.isCompleted == true ? '~ Completed!' : '~ Not Completed~'}</Text>
        </View>
    );
}
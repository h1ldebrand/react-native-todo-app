import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {AppText} from '../components/ui/AppText';

export const Todo = ({todo, onRemove, onOpen}) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onOpen(todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <AppText style={styles.title}>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    title: {
  
    }

})

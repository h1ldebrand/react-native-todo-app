import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
     Alert,
     Keyboard
} from 'react-native';
import { THEME } from '../theme'
import { AntDesign } from '@expo/vector-icons'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('');
            Keyboard.dismiss()
        } else {
            Alert.alert('field doesn`t be');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                placeholder="Type your text"
                value={value}
            />
            <AntDesign.Button name="pluscircleo" onPress={pressHandler}>
                Add
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10
    }
})
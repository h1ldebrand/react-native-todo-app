import React, { useState } from 'react';
import { Modal, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if(title.trim().length < 3){
            Alert.alert(
                'error Min length is 3 symbols',
                `You typed only ${title.trim().length} symbols.`
                )
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value);
        onCancel()
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    placeholder="Type message"
                    value={title}
                />
                <View style={styles.buttons}>
                    <AppButton 
                         onPress={cancelHandler} 
                         color={THEME.DANGER_COLOR}
                    >
                        Cancel
                    </AppButton>
                    <AppButton onPress={saveHandler}>
                        Save
                    </AppButton>
                </View>
            
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

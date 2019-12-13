import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = title => {
        updateTodo(todo.id, title)
        setModal(false)
    }

    return(
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{ todo.title }</AppTextBold>
                <AppButton 
                        onPress={() => setModal(true)}
                        color={THEME.MAIN_COLOR}
                    >
                        <FontAwesome name="edit" size={20} />
                    </AppButton>
            </AppCard>
            
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton 
                        onPress={() => changeScreen(null)}
                        color={THEME.GRAY_COLOR}
                    >
                        <AntDesign name='back' size={20} color="#fff" />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton 
                            onPress={() => removeTodo(todo.id)}
                            color={THEME.DANGER_COLOR}
                        >
                            <FontAwesome name="remove" size={20} color="#fff" />
                    </AppButton>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        // width: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 26
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})
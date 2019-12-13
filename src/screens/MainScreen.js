import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = () => {
    const { addTodo, todos, removeTodo } = useContext(TodoContext);
    const { changeScreen } = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
    )

    useEffect(() => {
        
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width);
        }

        Dimensions.addEventListener('change', update);

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    }, [])

    Dimensions.addEventListener('change')

    let content = (
        <View style={{deviceWidth}}>
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
                )}
            />
        </View>
    )

    if(todos.length === 0){
        content = <View style={styles.imgWrap}>
            <Image 
                style={styles.image}
                source={require('../../assets/no-items.png')} 
            />
            {/* <Image 
                style={styles.image}
                source={{
                    uri: 'https://habrastorage.org/webt/li/er/ad/lieradalolbqjf1mkogsekiyrrm.png'
                }} 
            /> */}
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            { content }
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

import React, {useReducer, useContext} from 'react';
import { Alert } from 'react-native'
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{id: '1', title: 'be good at React Native'}]
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)


    const addTodo = title => dispatch({type: ADD_TODO, title})
    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Remove element',
            `Are you sure you want to remove ${todo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null)
                        dispatch({type: REMOVE_TODO, id})
                    }
                }
            ],
            { cancelable: false }
        )
        changeScreen(null)
        dispatch({type: REMOVE_TODO, id})
    }
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

    return(
        <TodoContext.Provider 
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    ) 
}
 
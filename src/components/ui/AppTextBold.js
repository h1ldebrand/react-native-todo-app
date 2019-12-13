import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppTextBold = ({style, children, ...props}) => (
    <Text style={{...styles.default, ...style}} {...props} >
        {children}
    </Text>
)

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
})

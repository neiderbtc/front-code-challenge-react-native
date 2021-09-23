import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';

type Props = {
    text: string | JSX.Element;
    onPress: Function;
}

const Button: FC<Props> = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={.5}
            onPress={()=> onPress()}
        >
            <Text style={styles.TextStyle}> {text} </Text>
        </TouchableOpacity>
    );
};



export default Button;
import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
    text: string;
}

const Subtitle: FC<Props> = ({ text }) => {
    return (
        <Text style={styles.subtitle}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 25,
        paddingHorizontal: 30,
        marginTop: 5,
        color: '#fff'
    }
})

export default Subtitle;
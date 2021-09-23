import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, font, listColors } from '../../../assets/styles/generals';
import { decodeToUtf8 } from '../../../helpers/decodeToUtf8';

type Props = {
    text: string;
}

const CardQuestion: FC<Props> = ({ text }) => {
    return (
        <View style={styles.CardQuestion}>
            <Text style={[colors.white, font.center]}>
                {decodeToUtf8(text)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    CardQuestion: {
        borderRadius: 10,
        padding: 5,
        height: '50%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 1, width: 10 },
    }
})

export default CardQuestion;
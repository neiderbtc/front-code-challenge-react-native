import React, { FC } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View } from 'react-native';
import { listColors } from '../../../assets/styles/generals';

type Props = {
    text: string;
    response: boolean;
}

const CardResultQuestion: FC<Props> = ({ text, response }) => {
    return (
        <View style={[styles.Item, styles.row]}>
            <View style={styles.Icon}>
                {
                    response ?
                        <FontAwesomeIcon icon={faCheck} />
                        :
                        <FontAwesomeIcon icon={faTimes} />
                }
            </View>
            <Text style={styles.Question}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Item: {
        width: '100%',
        marginVertical: 8,
        backgroundColor: listColors.white,
        padding: 10,
        borderRadius: 5
    },
    Icon: {
        width: '15%',
        alignItems: 'center'
    },
    Question: {
        width: '85%',
        paddingLeft: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        textAlign: "center",
        color: listColors.white
    },
})

export default CardResultQuestion;
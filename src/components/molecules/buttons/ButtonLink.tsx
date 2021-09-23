import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import { listColors } from '../../../assets/styles/generals';

type Props = {
    text: string;
    to: string;
}

const ButtonLink: FC<Props> = ({ text, to }) => {
    return (
        <Link
            to={to}
            underlayColor="transparent"
        >
            <Text style={[styles.TextStyle, styles.SubmitButtonStyle]}>
                {text}
            </Text>
        </Link>
    );
};

const styles = StyleSheet.create({
    SubmitButtonStyle: {
        marginTop: 50,
        marginBottom: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: listColors.primary,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: listColors.white
    },
    TextStyle: {
        color: listColors.white,
        textAlign: 'center',
    },
})

export default ButtonLink;
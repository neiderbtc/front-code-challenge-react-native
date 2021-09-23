import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { font } from '../../assets/styles/generals';

type Props = {
    text?: string;
}

const Loading: FC<Props> = ({ text }) => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text > <FontAwesomeIcon icon={faSpinner} /> {text || 'loading...'} </Text>
        </View >
    );
};

export default Loading;
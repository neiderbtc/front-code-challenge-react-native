import React, {FC} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/styles/generals';

type Props = {
    text: string;
}

const CountPages: FC<Props> = ({text}) => {
    return (
        <View style={styles.Container}>
            <Text style={colors.white}>{text} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        fontSize: 30,
        height: '10%'
    }
})

export default CountPages;
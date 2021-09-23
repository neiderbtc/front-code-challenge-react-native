import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes, font } from '../../assets/styles/generals';
import { decodeToUtf8 } from '../../helpers/decodeToUtf8';

type Props = {
    title: string;
}

const TitleCategory: FC<Props> = ({ title }) => {

    return (
        <View style={styles.ContainerTitle}>
            <Text style={[colors.white, fontSizes.f30, font.center]}>
                {decodeToUtf8(title)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerTitle: {
        height: '20%',
        justifyContent: 'center',
    }
})

export default TitleCategory;
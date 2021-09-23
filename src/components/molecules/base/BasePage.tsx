import { StatusBar } from 'expo-status-bar';
import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors, listColors } from '../../../assets/styles/generals';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const BasePage: FC<Props> = ({ children }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="white" />
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingTop: "15%",
        paddingHorizontal: 40,
        backgroundColor: listColors.primary
    }
});

export default BasePage;
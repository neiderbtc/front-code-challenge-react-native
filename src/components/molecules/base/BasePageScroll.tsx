import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { listColors } from '../../../assets/styles/generals';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const BasePageScroll: FC<Props> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: listColors.primary
    },
    scrollView: {
        paddingHorizontal: 20,
    }
});

export default BasePageScroll;
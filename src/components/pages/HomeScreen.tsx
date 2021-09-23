import React, { useContext, useEffect, useState } from 'react';
import { Text, StyleSheet, Picker, View } from 'react-native';
import BasePage from '../molecules/base/BasePage';
import GameContext from '../../context/GameContext';
import { levels } from '../../service/levels';
import { colors } from '../../assets/styles/generals';
import ButtonLink from '../molecules/buttons/ButtonLink';
import Subtitle from '../atoms/Subtitle';
import Select from '../molecules/Select';


const HomeScreen = () => {
    const [selectedValue, setSelectedValue] = useState("hard");
    const { resetGame, changeDifficulty } = useContext(GameContext);
    useEffect(() => {
        resetGame();
    }, [])

    useEffect(() => {
        changeDifficulty(selectedValue)
    },[selectedValue] )
    
    return (
        <BasePage>
            <Text style={styles.header}>
                Welcome to the Trivia Challenge
            </Text>

            <Subtitle text="You will be presented with 10 True or False questions." />
            <Subtitle text="Can you score 100%?" />

            <Select
                keys={{
                    label: "name",
                    value: "value"
                }}

                selected={{
                    selectedValue: selectedValue,
                    setSelectedValue: setSelectedValue
                }}
                listValues={levels}
            />

            <ButtonLink text="BEGIN" to="/questions" />

        </BasePage>
    );
};


const styles = StyleSheet.create({
    containerSelect: {
        paddingTop: 40,
        alignItems: "center"
    },
    header: {
        flex: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingHorizontal: 30,
        marginTop: 5,
        color: '#fff'
    }
})


export default HomeScreen;
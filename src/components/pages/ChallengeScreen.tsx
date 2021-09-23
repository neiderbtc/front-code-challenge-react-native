import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors, listColors, font } from '../../assets/styles/generals';
import GameContext from '../../context/GameContext';
import { decodeToUtf8 } from '../../helpers/decodeToUtf8';
import useQuestions from '../../hooks/useQuestions';
import Button from '../atoms/Button';
import Loading from '../atoms/Loading';
import BasePage from '../molecules/base/BasePage';
import CardQuestion from '../molecules/cards/CardQuestion';
import CountPages from '../molecules/CountPages';
import TitleCategory from '../molecules/TitleCategory';

const ChallengeScreen = () => {

    const {
        currentQuestion,
        getQuestion,
        numberOfQuestions,
        saveResponse,
        total,
        setComplete,
        setQuestions,
        difficulty
    } = useContext(GameContext);

    const { getQuestions, questions } = useQuestions();
    
    useEffect(() => {
        getQuestions(difficulty);
    }, [])

    useEffect(() => {
        setQuestions(questions); 
    }, [questions])

    const onPress = (response: string) => {
        saveResponse(response);
        const nextQuestion = numberOfQuestions + 1;
        if (nextQuestion < total) {
            getQuestion(nextQuestion);
            return true;
        }
        setComplete(true);
    }

    return (
        <BasePage>
            {currentQuestion ? <>

                <TitleCategory title={currentQuestion.category} />

                <CardQuestion text={currentQuestion.question} />

                <CountPages text={`${numberOfQuestions + 1} / 10`} />

                <View style={styles.row}>
                    <Button text="False" onPress={() => onPress("False")} />
                    <Button text="True" onPress={() => onPress("True")} />
                </View>
            </>
                : <Loading />
            }
        </BasePage>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: '10%',
        alignItems: 'center',
        textAlign: "center",
        color: listColors.white
    }
})

export default ChallengeScreen;
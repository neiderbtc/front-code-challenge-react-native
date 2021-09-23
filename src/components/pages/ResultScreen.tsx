import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Redirect } from 'react-router-native';
import { colors, fontSizes, font } from '../../assets/styles/generals';
import GameContext from '../../context/GameContext';
import Button from '../atoms/Button';
import BasePageScroll from '../molecules/base/BasePageScroll';
import CardResultQuestion from '../molecules/cards/CardResultQuestion';

const ResultScreen = () => {
    const { questionsResponses, total, goodResponses, resetGame } = useContext(GameContext);
    const [goHome, setGoHome] = useState<boolean>(false);

    const changeGoHome = () => setGoHome(true);

    return (goHome ? <Redirect to="/" /> :
        <BasePageScroll>
            <>
                <Text style={[font.center, fontSizes.f30, colors.white]}>
                    {`You score \n ${goodResponses}/${total}`}
                </Text>
                {
                    questionsResponses.map((item, index) => (

                        <CardResultQuestion
                            key={index}
                            text={item.question}
                            response={item.response}
                        />
                    ))
                }

                <View style={styles.ContainerButton}>
                    <Button text="PLAY AGAIN?" onPress={resetGame} />
                </View>

                <View style={styles.ContainerButton}>
                    <Button text={
                        <View style={styles.row}>
                            <FontAwesomeIcon color="#fff" icon={faHome} />
                            <Text style={colors.white}>  GO TO START?</Text>
                        </View>}
                        onPress={changeGoHome} />
                </View>
            </>
        </BasePageScroll>
    );
};

const styles = StyleSheet.create({
    ContainerButton: {
        marginBottom: 20
    },
    Icon: {
        width: '15%',
        alignItems: 'center'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        textAlign: "center",
        color: "#ffffff"
    },
})

export default ResultScreen;
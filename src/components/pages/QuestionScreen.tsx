import React, { useContext, useEffect } from 'react';
import GameContext from '../../context/GameContext';
import useQuestions from '../../hooks/useQuestions';
import ChallengeScreen from './ChallengeScreen';
import ResultScreen from './ResultScreen';


const QuestionScreen = () => {

    const { complete } = useContext(GameContext);

    return (
        complete ? <ResultScreen /> : <ChallengeScreen />
    );
};


export default QuestionScreen;
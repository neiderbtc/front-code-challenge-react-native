import React, { useEffect, useReducer, FC } from 'react';
import GameContext from './GameContext';
import gameReducer from './gameReducer';
import { initialState, TypeQuestion } from './initialState';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const GameState: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const setQuestions = (questions: TypeQuestion[]) => {

        dispatch({
            type: 'set_questions',
            payload: questions
        })

    }
    
    useEffect(() => {
        getQuestion(0)
    },[state.questions])

    const getQuestion = (numberQuestion: number) => {

        const result = state.questions.find((item, index) => index === numberQuestion);
        if (result) {
            dispatch({
                type: 'get_question',
                payload: { currentQuestion: result, numberOfQuestions: numberQuestion },
            })
        }
    }

    const saveResponse = (response: string) => {

        if (state.currentQuestion) {
            let result = false;
            let goodsResponses = state.goodResponses;
            if (state.currentQuestion.correct_answer === response) {
                result = true;
                goodsResponses = state.goodResponses++;

            }
            const newObject = [...state.questionsResponses, {
                ...state.currentQuestion,
                response: result,
                goodsResponses: goodsResponses
            }];

            dispatch({
                type: 'save_response',
                payload: newObject
            })
        }
    }

    const setComplete = (value: boolean) => {
        dispatch({
            type: 'set_complete',
            payload: value
        })
    }

    const resetGame = () => {
        dispatch({
            type: 'reset_game'
        })
    }

    const changeDifficulty = (difficulty:  string) => {
            dispatch({
                type: 'change_difficulty',
                payload: difficulty    
            })
    } 

    return (
        <GameContext.Provider value={
            {
                questions: state.questions,
                currentQuestion: state.currentQuestion,
                numberOfQuestions: state.numberOfQuestions,
                questionsResponses: state.questionsResponses,
                total: state.total,
                goodResponses: state.goodResponses,
                complete: state.complete,
                difficulty: state.difficulty,
                getQuestion,
                saveResponse,
                setComplete,
                resetGame,
                setQuestions,
                changeDifficulty
            }
        }>
            {children}
        </GameContext.Provider>
    );
};


export default GameState;
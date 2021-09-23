export const initialState = {
    questions: [],
    currentQuestion: null,
    questionsResponses: [],
    numberOfQuestions: 0,
    difficulty: 'easy',
    total: 0,
    goodResponses: 0,
    complete: false,
    getQuestion: () => {},
    saveResponse: () => {},
    setComplete: () => {},
    resetGame: () => {},
    setQuestions: () => {},
    changeDifficulty: () => {},
}

export type TypeQuestion = {
    category: string;
    type: boolean;
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface InterfaceQuestionResponse extends TypeQuestion {
    response: boolean; 
 }

export interface AppContextInterface {
    questions: TypeQuestion[],
    currentQuestion: TypeQuestion | null;
    numberOfQuestions: number;
    questionsResponses: InterfaceQuestionResponse[];
    getQuestion: Function;
    saveResponse: Function;
    setComplete: Function;
    setQuestions: Function;
    resetGame: Function;
    changeDifficulty: Function;
    difficulty: string;
    total: number;
    goodResponses: number;
    complete: boolean;
  }



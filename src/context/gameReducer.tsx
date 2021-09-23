import { AppContextInterface, initialState, InterfaceQuestionResponse, TypeQuestion } from "./initialState"

type ActionTypes =
  {
    type: 'set_questions'
    payload: TypeQuestion[]
  }
  | {
    type: 'get_question'
    payload: { numberOfQuestions: number; currentQuestion: TypeQuestion } | null
  }
  |
  {
    type: 'save_response',
    payload: InterfaceQuestionResponse[]
  }
  |
  {
    type: 'set_complete',
    payload: boolean
  }
  |
  {
    type: 'reset_game'
  }
  |
  {
    type: 'change_difficulty', 
    payload: string;
  }


const gameReducer = (state: AppContextInterface, action: ActionTypes) => {
  switch (action.type) {
    case 'set_questions':
      return {
        ...state,
        questions: action.payload,
        total: action.payload.length,
      }
    case 'get_question':
      return {
        ...state,
        ...action.payload,
      }
    case 'save_response':
      return {
        ...state,
        questionsResponses: action.payload,
      }
    case 'set_complete':
      return {
        ...state,
        complete: action.payload,
      }
      case 'change_difficulty':
        return {
          ...state,
          difficulty: action.payload,
        }
    case 'reset_game':
      return initialState
    default:
      return state
  }
}

export default gameReducer;

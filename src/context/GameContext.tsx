import React from 'react';
import { AppContextInterface, initialState } from './initialState';


const GameContext = React.createContext<AppContextInterface>(initialState);


export default GameContext;
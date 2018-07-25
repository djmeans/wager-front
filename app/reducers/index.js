import { combineReducers } from 'redux';
import * as betReducers from './bets';

export default combineReducers(Object.assign(
    betReducers,
))
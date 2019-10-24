import { createStore } from 'redux';
import { counterReducer } from '../reducers/counter.js'

export const store = createStore(counterReducer)
import { combineReducers } from 'redux';
import liveStreamReducer from './Live/liveReducer';

const rootReducer = combineReducers({
    live: liveStreamReducer
})

export default rootReducer;
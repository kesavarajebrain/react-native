import {
  LIVE_STREAM_DATA_REQ_SUCESS,
  GET_LIVE_STREAM_DATA_REQ,
  LIVE_STREAM_DATA_REQ_FAIL,
} from './liveTypes';
const initialState = {
  result:[],
  error: '',
};

const liveStreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIVE_STREAM_DATA_REQ:
      return {...state};
    case LIVE_STREAM_DATA_REQ_SUCESS:
      console.log('^^^^^^^^^^^^',action.data)
      return {
        result: action.data,
      };
    case LIVE_STREAM_DATA_REQ_FAIL:
      return {
        result: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default liveStreamReducer;

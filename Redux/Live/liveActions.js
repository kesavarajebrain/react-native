import axios from 'axios';
import Ajax from '../../Utills/Ajax'
import {
  LIVE_STREAM_DATA_REQ_SUCESS,
  GET_LIVE_STREAM_DATA_REQ,
  LIVE_STREAM_DATA_REQ_FAIL,
} from './liveTypes';
import {View, StyleSheet, Button, Alert} from 'react-native';
// fetch GET Api

export const fetchLiveData = () => {
  console.log('3333');
  return (dispatch) => {
    return Ajax
      .get('http://192.168.150.101:3000/api/getLiveListSchedules')
      .then(response => {
        console.log('reddd*****', response.data);

        if (response) {
          console.log('**************', response);
          return dispatch({
            type: LIVE_STREAM_DATA_REQ_SUCESS,
            data: response,
          });
        }
      })
      .catch(error => {
        if (error) {
          console.log('ddddd', error);
          const response = {
            status: error.response.status,
            statusText: error.response.statusText,
            data: null,
          };
          return dispatch({
            type: LIVE_STREAM_DATA_REQ_SUCESS,
            data: response,
          });
        }
        return 'error';
      });
  };
};

// export const fetchLiveData = () => {
//   return dispatch => {
//     dispatch(fetchReqLiveDataApi());
//     axios
//       .get('http://localhost:3000/api/getLiveListSchedules')
//       .then(response => {
//         // response.data is the users
//         const liveStreamData = response.data;
//         console.log(liveStreamData);
//         dispatch(fetchSuccessLiveDataApi(liveStreamData));
//       })
//       .catch(error => {
//         // error.message is the error message
//         dispatch(fetchLiveDataFailure(error.message));
//       });
//   };
// };

export const fetchReqLiveDataApi = () => {
  return {
    type: GET_LIVE_STREAM_DATA_REQ,
  };
};

export const fetchSuccessLiveDataApi = liveStreamData => {
  return {
    type: LIVE_STREAM_DATA_REQ_SUCESS,
    payload: liveStreamData,
  };
};

export const fetchLiveDataFailure = error => {
  return {
    type: LIVE_STREAM_DATA_REQ_FAIL,
    payload: error,
  };
};

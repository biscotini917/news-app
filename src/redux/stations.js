import * as firebase from 'firebase';

//action types
const GET_STATIONS = 'GET_STATIONS'

//action creators
const getStations = stations => ({
  type: GET_STATIONS, stations
})

//reducer
export default function reducer (stations = [], action) {
  switch (action.type) {
    case GET_STATIONS:
      return action.stations
    default:
      return stations;
  }
}

//thunk
export const fetchStations = () => dispatch => {
  const rootRef = firebase.database().ref().child('Stations');
  rootRef.on('value', stations => {
    dispatch(getStations(Object.values(stations.val())))
  })
};


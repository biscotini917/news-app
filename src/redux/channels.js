import database from '../index.js'

//action types
const GET_CHANNELS = 'GET_CHANNELS'

//action creators
const getChannels = channels => ({
  type: GET_CHANNELS, channels
})

//reducer
export default function reducer (channels = [], action) {
  switch (action.type) {
    case GET_CHANNELS:
      return action.channels
    default:
      return channels;
  }
}

//thunk
export const fetchChannels = () => dispatch => {
  console.log('fetching userssss');
  database.ref('Channels').on('value', gotData, errData)

  function gotData(data) {
    console.log(data, 'data from firebase')
    let channels = data.val();
    dispatch(getChannels(channels))
  }
  function errData(err) {
    console.log('Error! issue with pull channels')
    console.log(err);
  }
};


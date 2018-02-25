import * as firebase from 'firebase';

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
  const rootRef = firebase.database().ref().child('Channels');
  rootRef.on('value', channels => {
    dispatch(getChannels(Object.values(channels.val())))
  })
};


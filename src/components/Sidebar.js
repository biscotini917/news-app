import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: '',
      channels: '',
      blah: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gotData = this.gotData.bind(this);
    this.errData = this.errData.bind(this);

  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    firebase.database().ref('Channels').push({ name: 'bruce', channelName: this.state.channel });
    this.setState({ channel: '', newChannels: '', name: '' });
  }

  gotData(data) {
    let channels = data.val()
    this.setState({ channels })
  }

  errData(err) {
    console.log('Error!');
    console.log(err);
  }

  render() {
    console.log(this.props, 'current props')
    return (
      <sidebar>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>New Channel: </label>
            <input
              name="channel"
              type="channel"
              value={this.state.channel}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Create</button>
        </form>
        <br />
        <hr />
        <br />
        <section>
          <h4 className="menu-item">You Channels
        </h4>
        { !this.props.channels
          ? <h5>There are no channels</h5>
          : this.props.channels.map(channel => {
            return (
              <div key={channel.channelName}>
              <h5>{channel.channelName}</h5>
              </div>
            )
          })
        }
        </section>
      </sidebar>
    );
  }
}

function mapStateToProps(state, props) {
  console.log(state.channels, 'current state')
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Sidebar)

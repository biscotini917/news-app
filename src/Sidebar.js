import React, { Component } from 'react';
import database from './index';
// import { POINT_CONVERSION_COMPRESSED } from 'constants';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      channel: '',
      channels: ''
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
    database.ref('Channels').push({name: 'bruce', channelName: this.state.channel});
    this.setState({channel: '', newChannels: '', name: ''});
    database.ref('Channels').on('value', this.gotData, this.errData);
  }

  gotData(data) {
    let channels = data.val()
    this.setState({channels})
  }

  errData(err) {
    console.log('Error!');
    console.log(err);
  }

  render() {
    console.log(this.state)
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
          <h4 className="menu-item">Your Channels
        </h4>
        </section>
        </sidebar>
      );
    }
  }
  // {
  //   (this.state.channels === 0)
  //   ? <h2> There are no channels </h2>
  //   : this.state.channels
  // }

// gotData(data) {
//   let channels = data.val()
//   let keys = Object.keys(channels);
//   for (let i = 0; i < keys.length; i++) {
//     let k = keys[i]
//     let channelName = channels[k].channelName;
//     let name = channels[k].name;
//     console.log(name, channelName)
//   }
// }

// {
//   Object.values(this.state.channels).map((channel) => {
//     return (
//       //TBD
//     )
//   })
// }

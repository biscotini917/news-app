import React, { Component } from 'react';
import database from './index';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      channel: ''
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    database.ref('Channels').push({name: 'bruce', channelName: this.state.channel})
    this.setState({channel: ''})
  }

  render() {
    console.log('state when typing in sidebar', this.state)
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

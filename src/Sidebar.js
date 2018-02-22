import React, { Component } from 'react';

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
    console.log('state when clicking in sidebar', this.state)
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
          <h4 className="menu-item">Channels
        </h4>
        </section>
      </sidebar>
    );
  }
}

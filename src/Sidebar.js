import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      channel: ''
    }
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    console.log('state', this.state)
    return (
      <sidebar>
      <form>
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
      </form>
      <button type="create">Create</button>
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

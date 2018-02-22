import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import News from './News';
import Sports from './Sports';
import { flatten, times, range } from 'lodash';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const NUMBER_OF_PARAGRAPHS = 2;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => {
      return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumasdfadfa.</p>)
    }))

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 id="headerTitle" className="App-title">The Newsroom</h1>
            <p id="headerContent">Latest News Today</p>
          </header>
          <br />
          <Grid>
            <Row className="show-grid">
              <Col xs={4} md={2}>
                <div>
                  <Sidebar />
                </div>
              </Col>
              <Col xs={14} md={10}>
                {paragraphs.map(paragraph => paragraph)}
                <News />
                <Sports />
              </Col>
            </Row>
          </Grid>
          <br />
          <div className="toc">
            <Switch>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// <Route exact path="/albums" component={StatefulAlbums} />
// <Route path="/albums/:albumId" component={SingleAlbum} />

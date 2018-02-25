import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import News from '../src/components/News';
import Navbar from '../src/components/Navbar';
import Sports from '../src/components/Sports';
import { flatten, times, range } from 'lodash';
import Sidebar from '../src/components/Sidebar';
import { fetchChannels } from './redux/channels';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    const NUMBER_OF_PARAGRAPHS = 2;
    const paragraphs = flatten(times(NUMBER_OF_PARAGRAPHS, (index) => {
      return (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumasdfadfa.</p>)
    }))

    console.log(this.props, 'props')

    return (
      <Router>
        <div className="App">
          <Navbar />
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

    const mapState = null;

const mapDispatch = dispatch => ({
          fetchInitialData: () => {
          dispatch(fetchChannels())
        }
        })

        export default connect(mapState, mapDispatch)(App);

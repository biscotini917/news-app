import React, { Component } from 'react';
import axios from 'axios';

export default class News extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    console.log('current state', this.state.articles)
    return (
      <div className="News">
        <hr />
        <h2>Tech News</h2>
        <hr />
        <div className="articles">
          {!this.state.articles ?
            <h2>There is no content</h2>
            : this.state.articles.map(article => {
              return (
                <div key={article.title}>
                <a href={article.url}>
                    <img src={article.urlToImage} alt="article" width="200px" className="images" />
                </a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

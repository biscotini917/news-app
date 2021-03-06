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
        <h2>Sports News</h2>
        <hr />
        <div className="articles">
          {!this.state.articles ?
            <h2>There is no content</h2>
            : this.state.articles.map(article => {
              return (
                <a href={article.url}>
                  <div key={article.title} className="article">
                    <img src={article.urlToImage} alt="article" width="200px" className="images" />
                    <div className="articleContainer">
                      <h4><b>{article.title}</b></h4>
                      <p>{article.description}r</p>
                      <p><a href={article.url}><strong>Link</strong></a></p>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }
}

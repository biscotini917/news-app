import React, { Component } from 'react';
import axios from 'axios';
import { newsAPIKey } from '../secrets';

export default class News extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    return axios.get('http://172.16.22.215:8080/api/users')
      .then(res => res.data)
      .then(news => {
        this.setState(news)
        console.log(news, 'hi')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    // console.log('current state', this.state.articles)
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
                  <div className="article">
                    <img src={article.urlToImage} alt="article" width="200px" className="images" />
                    <div className="articleContainer">
                      <h4><b>{article.title}</b></h4>
                      <p>{article.description}r</p>
                      <p><a href={article.url}>Link</a></p>
                    </div>
                  </div>
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

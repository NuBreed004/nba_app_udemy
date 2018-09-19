import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../helpers';
import styles from '../../articles.css';
import Header from './header';
import Body from './body';

class NewsArticle extends Component {

  state = {
    article: [],
    team: []
  }

  componentWillMount() {
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
          .then(response => {
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
                  .then(response => {
                    this.setState({
                      article,
                      team: response.data
                    })
                  })
          })
  }

  render() {
    console.log(this.state);
    const { article, team } = this.state

    return (
      <div className={styles.articleWrapper}>
        <Header article={article} team={team[0]} />
        <Body />
      </div>
    );
  }

}

export default NewsArticle;

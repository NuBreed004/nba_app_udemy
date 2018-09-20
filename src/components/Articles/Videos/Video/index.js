import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../helpers';

import styles from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component {

  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  }

  componentWillMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
          .then(response => {
            let article = response.data[0]

            axios.get(`${URL}/teams?id=${article.team}`)
                  .then(response => {
                    this.setState({
                      article,
                      team: response.data
                    })
                    this.getRelated()
                  })
          })
  }

  getRelated = () => {

    axios.get(`${URL}/teams`)
          .then(response => {
            let teams = response.data

            axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                  .then(response => {
                    this.setState({
                      teams,
                      related: response.data
                    })

                  })
          })
  }

  render() {
    const { team, article } = this.state
    return (
      <div>
        <Header team={team[0]} />
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            src={`https://www.youtube.com/embed/${article.url}`}
            title="videoplayer"
            height="300px"
            width="100%"
          ></iframe>
        </div>
        <VideosRelated
          data={this.state.related}
          teams={this.state.teams}
        />
      </div>
    );
  }

}

export default VideoArticle;

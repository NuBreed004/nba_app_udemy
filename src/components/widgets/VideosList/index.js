import React, { Component } from 'react';
import styles from './index.css';
import axios from 'axios';
import { URL } from '../../../helpers';
import Buttons from '../Buttons';
import VideosTemplate from './VideosTemplate';

class VideosList extends Component {

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    amount: this.props.amount,
    end: this.props.start + this.props.amount
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }

  request = (start, end) => {
    if(this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
            .then(response => {
              this.setState({
                teams: response.data,
              })
            })
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
          .then(response => {
            this.setState({
              videos: [...this.state.videos, ...response.data],
              start,
              end
            })
          })
  }

  renderTitle = () => {
    return this.props.title ?
    <h3><strong>NBA</strong> Videos</h3>
     : null
  }


  renderVideos = () => {
    let template = null

    switch (this.props.type) {
      case 'card':
        template = <VideosTemplate
          data={this.state.videos}
          teams={this.state.teams}
         />
        break;
      default:
        template = null
    }
    return template
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end, end)
  }

  renderButton = () => {
    return this.props.loadMore ?
    <Buttons
      cta="Load More Videos"
      loadMore={()=> this.loadMore()}
      type="loadmore"
     />
    :
    <Buttons
      cta="More Videos"
      type="linkTo"
      linkTo="/videos"
     />
  }

  render() {
    return (
      <div className={styles.videoList_wrapper}>
        { this.renderTitle() }
        { this.renderVideos() }
        { this.renderButton() }
      </div>
    );
  }

}

export default VideosList;

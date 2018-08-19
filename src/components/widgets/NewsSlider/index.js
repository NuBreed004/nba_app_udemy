import React, { Component } from 'react';
import SliderTemplates from './sliderTemplates';
import axios from 'axios';
import { URL } from '../../../helpers';


class NewsSlider extends Component {

  state = {
    news: []
  }

  componentWillMount() {
    axios.get(`${URL}/articles?_start=4&_end=8`)
    .then(response => {
      this.setState({
        news: response.data
      })
    })

  }

  render() {
    return (
      <SliderTemplates data={this.state.news} />
    );
  }

}

export default NewsSlider;

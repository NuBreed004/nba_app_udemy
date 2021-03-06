import React, { Component } from 'react';
import SliderTemplates from './sliderTemplates';
import axios from 'axios';
import { URL } from '../../../helpers';


class NewsSlider extends Component {

  state = {
    news: []
  }

  componentWillMount() {
    axios.get(`${URL}/articles?_start=${this.props.from}&_end=${this.props.to}`)
    .then(response => {
      this.setState({
        news: response.data
      })
    })

  }

  render() {
    return (
      <SliderTemplates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }

}

export default NewsSlider;

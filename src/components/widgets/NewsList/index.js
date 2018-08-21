import React, { Component } from 'react';
import {
  CSSTransition,
  CSSTransitionGroup
} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../helpers';

class NewsList extends Component {

  state = {
    news: []
  }

  componentWillMount() {
    axios.get(`${URL}/articles`)
          .then(response => {
            this.setState({
              news: [...this.state.news, ...response.data]
            })
          })
  }

  render() {
    console.log(this.state.news)
    return (
      <div>Hello!</div>
    );
  }

}

export default NewsList;

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
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount() {
    const { start, end, items } = this.state
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
    .then(response => {
      this.setState({
        items: [...items, ...response.data]
      })
    })
  }

  render() {
    console.log(this.state.items)
    return (
      <div>Hello!</div>
    );
  }

}

export default NewsList;

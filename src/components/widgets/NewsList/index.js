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
    end: this.props.start + this.props.amount
  }

  componentWillMount() {
    const { items, start, end } = this.state
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
          .then(response => {
            this.setState({
              items: [...items, ...response.data]
            })
          })
  }

  renderNews = (type) => {
    let template = null

    switch (type) {
      case 'card':
        template = this.state.items.map(item => (
          <div key={item.id}>
            Hello!
          </div>
        ))
        break;
      default:
        template = null
    }
    return template
  }

  render() {
    return (
       <div>
         { this.renderNews( this.props.type ) }
       </div>
    );
  }

}

export default NewsList;

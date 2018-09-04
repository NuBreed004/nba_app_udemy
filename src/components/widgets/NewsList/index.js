import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../helpers';
import CardInfo from '../CardInfo';
import styles from './newslist.css';
import Button from '../Buttons';

class NewsList extends Component {

  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentWillMount() {
    const { start, end } = this.state

    this.request(start, end)
  }

  request = (start, end) => {

    if(this.state.teams < 1) {
      axios.get(`${URL}/teams`)
            .then(response => {
              this.setState({
                teams: response.data
              })
            })
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
          .then(response => {
            this.setState({
              items: [...this.state.items, ...response.data]
            })
          })
  }

  renderNews = (type) => {
    const { items } = this.state
    let template = null

    switch (type) {
      case 'card':
        template = items.map((item, i) => (
          <CSSTransition
              classNames={{
                enter: styles.newslist_wrapper,
                enterActive: styles.newslist_wrapper_enter
              }}
              timeout={500}
              key={i}
            >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    type='cardinfo'
                    teams={this.state.teams}
                   />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ))
        break;
      default:
        template = null
    }
    return template
  }

  loadMore = () => {
    let start = this.state.end
    let end = this.state.end + this.state.amount

    this.request(start, end)
  }

  render() {
    return (
       <div>
         <TransitionGroup
            component="div"
            className="list"
           >
           { this.renderNews( this.props.type ) }
         </TransitionGroup>
         <Button
            type="loadmore"
            loadmore={() => this.loadMore() }
            cta="Load More"
          />
       </div>
    );
  }

}

export default NewsList;

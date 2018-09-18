import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
import NewsArticle from './components/Articles/News/Post';

class Routes extends Component {

  render() {
    return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:id" component={NewsArticle} />
      </Switch>
    </Layout>
    );
  }

}

export default Routes;

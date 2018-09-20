import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
import NewsArticle from './components/Articles/News/Post';
import VideoArticle from './components/Articles/Videos/Video/index';
import News from './components/News/index';
import Videos from './components/Videos/index';

class Routes extends Component {

  render() {
    return (
    <Layout>
      <Switch>
        <Route path="/articles/:id" component={NewsArticle} />
        <Route path="/videos/:id" component={VideoArticle} />
        <Route path="/news" component={News} />
        <Route path="/videos" component={Videos} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
    );
  }

}

export default Routes;

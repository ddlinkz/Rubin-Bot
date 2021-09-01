import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FrontPage, TweetPage, SearchPage } from '../pages';
import { Header, Footer } from '../components';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={FrontPage} />
      <Route path="/tweets/:tweet_id" component={TweetPage} />
      <Route path="/search" component={SearchPage} />
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { TweetList } from '../pages';

function App() {
  return (
    <Router>
      <Route path="/tweets/list" exact component={TweetList} />
      <TweetList />
      Hello
    </Router>
  );
}

export default App;

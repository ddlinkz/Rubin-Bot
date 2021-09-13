import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FrontPage, TweetPage, SearchPage, AboutPage } from '../pages';
import { Header, Footer } from '../components';

import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 7rem;
`

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Route path="/" exact component={FrontPage} />
        <Route path="/tweets/:tweet_id" component={TweetPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/about" component={AboutPage} />
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

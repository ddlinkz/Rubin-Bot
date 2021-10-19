import React from 'react';

import api from '../api';

import { FrontPage, TweetPage, SearchPage, AboutPage } from '../pages'
import { Header, Footer } from '../components'

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

import { Router, Route } from 'react-router-dom';

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    if(window.location.pathname !== "/"){
        const body = {};
        body.route = window.location.pathname;
        api.putPageView(body);
    } // Handle PageView (FrontPage handles it itself)
});

class ApiWrapper extends React.Component {
	constructor(props){
		super(props)
		this.state = ({
			isLoading: false,
			tweets: [],
			randomTweet: {}
		})
	}

	componentDidMount = async () => {
		// this.setState({ isLoading: true });

        await api.getAllTweets().then(tweets => {

            const rand = getRandomInt(tweets.data.data.length);
            const copy = Object.assign({}, tweets.data.data[rand]);

            this.setState({
                isLoading: false,
                tweets: tweets.data.data.reverse(),
                randomTweet: copy
            })
        })

        if(window.location.pathname !== "/"){
            const body = {};
            body.route = window.location.pathname;
            api.putPageView(body);
        } // Handle PageView (FrontPage handles it itself)

        // Google Analytics
        ReactGA.pageview(window.location.pathname);
    }

	render() {
		const { isLoading, tweets, randomTweet} = this.state;

		return (
            <Router history={history}>
                <Header />
                <Route path="/" exact 
                	   component={() => <FrontPage isLoading={isLoading}
                	   							   tweets={tweets}
                	   							   randomTweet={randomTweet}/> }/>
                <Route path="/tweets/:tweet_id" 
                	   component={(matchProps) => <TweetPage {...matchProps}
                	   							   {...this.props}
                	   							   isLoading={isLoading}
                								   tweets={tweets}/> }/>
                <Route path="/search" component={SearchPage} />
                <Route path="/about" component={AboutPage} />
                <Footer />
            </Router>
		)
	}

}

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

export default ApiWrapper
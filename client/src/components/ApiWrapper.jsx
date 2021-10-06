import React from 'react';

import api from '../api';

import { FrontPage, TweetPage, SearchPage, AboutPage } from '../pages'
import { Header, Footer } from '../components'

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
		this.setState({ isLoading: true });

        console.log(this.props);

        await api.getAllTweets().then(tweets => {

            const rand = getRandomInt(tweets.data.data.length);
            const copy = Object.assign({}, tweets.data.data[rand]);

            this.setState({
                isLoading: false,
                tweets: tweets.data.data.reverse(),
                randomTweet: copy
            })
        })
    }

	render() {
		const { isLoading, tweets, randomTweet} = this.state;

		return (
            <Router>
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
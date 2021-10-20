import React, { Component } from 'react';

import api from '../api';
import { TweetList, Showcase, MoreTweets } from '../components';

class TweetPage extends Component {
	constructor(props){
		super(props);
		this._isMounted = false; // Fix component mounting errors
		this.state = {
			tweet: [],
			tweets: [],
			comments: [],
			view_count: 0
		};
	}

    componentDidMount = async () => {
    	this._isMounted = true;
        this.setState({tweets: this.props.tweets })

        this._isMounted && this.getTweetId(this.props.match.params.tweet_id);
        this._isMounted && this.getCommentId(this.props.match.params.tweet_id);
        this._isMounted && this.getPageView(this.props.match.params.tweet_id);
    }

    componentWillUnmount() {
    	this._isMounted = false;
    }

    componentDidUpdate = async (prevProps) => {
    	// Compare to check if route params have changed
    	if(this.props.match.params.tweet_id !== prevProps.match.params.tweet_id) {
    		const result = this.state.tweets.filter(obj => {
    			return obj.tweet_id == this.props.match.params.tweet_id;
    		})

    		this.setState({
    			tweet: result[0]
    		})

    		await api.getCommentId(this.props.match.params.tweet_id).then(res => {
    			this.setState({
    				comments: res.data.data
    			})
    		}).catch((error) => {
    			this.setState({ // Bad practice?
    				comments: []
    			})
    		})

    		await api.getPageView(this.props.match.params.tweet_id).then(res => {
    			this.setState({
    				view_count: res.data.data.view_count
    			})
    		}).catch((error) => {
    			this.setState({ // Bad practice?
    				view_count: 0
    			})
    		})
    	};
    };

    async getTweetId(tweet_id) {
    	let tweet = await api.getTweetId(tweet_id);
    	this._isMounted && this.setState({
    		tweet: tweet.data.data
    	})
    };

    async getCommentId(tweet_id) {
    	let comments = await api.getCommentId(tweet_id);
    	this._isMounted && this.setState({
    		comments: comments.data.data
    	})
    };

    async getPageView(tweet_id) {
    	let pageview = await api.getPageView(tweet_id);
    	if(pageview.data.data !== null){
	    	this._isMounted && this.setState({
	    		view_count: pageview.data.data.view_count
	    	})
	    }
    };

	render() {
		const { tweets, tweet, comments, view_count } = this.state;
		const tweet_id = this.props.match.params.tweet_id;

		return (
			<div>
				<Showcase tweet={tweet}
						  comments={comments}
						  tweet_id={tweet_id}
						  view_count={view_count} />
				<MoreTweets />
				<TweetList tweets={tweets}/>
			</div>
		)

	}
}

export default TweetPage;
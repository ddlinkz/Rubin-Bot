import React, { Component } from 'react';

import api from '../api';
import { TweetList, Showcase, MoreTweets } from '../components';

class TweetPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			tweet: [],
			tweets: [],
			comments: [],
			isLoading: false,
		};
	}

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getTweetId(this.props.match.params.tweet_id).then(tweets => {
            this.setState({
                tweet: tweets.data.data,
                isLoading: false,
            })
        })

        await api.getAllTweets().then(tweets => {
            this.setState({
                tweets: tweets.data.data,
        	})
        })

        await api.getCommentId(this.props.match.params.tweet_id).then(comments => {
        	this.setState({
        		comments: comments.data.data
        	})
        })
    }

    componentDidUpdate = async (prevProps) => {
    	if(this.props.match.params.tweet_id !== prevProps.match.params.tweet_id) {
    		const result = this.state.tweets.filter(obj => {
    			return obj.tweet_id == this.props.match.params.tweet_id;
    		})
    		await api.getCommentId(this.props.match.params.tweet_id).then(comments => {
	        	this.setState({
	        		tweet: result,
	        		comments: comments.data.data
	        	})
        	})
    		console.log('changed!!!');
    	};
    };

	render() {
		const { tweets, tweet, comments } = this.state;
		const tweet_id = this.props.match.params.tweet_id;

        const extractTweet = Object.assign({}, tweet[0]);

		return (
			<div>
				<Showcase tweet={extractTweet}
						  comments={comments}
						  tweet_id={tweet_id} />
				<MoreTweets />
				<TweetList tweets={tweets.reverse()}/>
			</div>
		)

	}

}
export default TweetPage;
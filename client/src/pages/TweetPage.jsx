import React, { Component } from 'react';

import api from '../api';
import { MainTweet, TweetList } from '../components';

import styled from 'styled-components';

const Wrapper = styled.div`
	font-family: inherit;
	font-style: italic;
	padding: 10px;
	font-size: 32px;
`
class TweetPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			tweet: [],
			tweets: [],
			isLoading: false,
		};
	}

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getTweetId(this.props.match.params.tweet_id).then(tweets => {
        	console.log(tweets.data.data);
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
    }

    componentDidUpdate = (prevProps) => {
    	if(this.props.match.params.tweet_id !== prevProps.match.params.tweet_id) {
    		const result = this.state.tweets.filter(obj => {
    			return obj.tweet_id == this.props.match.params.tweet_id;
    		})
    		this.setState({
    			tweet: result
    		})
    		console.log('changed!!!');
    	};
    };

	render() {
		const { tweets, tweet } = this.state;
        console.log('TCL: TweetList -> render -> tweets', tweet);

        const extractTweet = Object.assign({}, tweet[0]);

		return (
			<div>
				<MainTweet tweet={extractTweet.img}
						   text={extractTweet.text_string}
						   alt={extractTweet.secure_img}
						   tweet_id={extractTweet.tweet_id} />
				<Wrapper> More Tweets </Wrapper>
				<TweetList tweets={tweets.reverse()}/>
			</div>
		)

	}

}
export default TweetPage;
import React, { Component } from 'react';
import api from '../api';
import { TweetList, Showcase, Loading } from '../components';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
	font-family: inherit;
	font-style: italic;
	padding: 10px;
	font-size: 32px;
`
const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const LoadInWrapper = styled.div`
	animation-name: ${fadeIn};
	animation-duration: 4s;
`

const SizeWrapper = styled.div`
	height: 100%;
`

class FrontPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			tweets: [],
			isLoading: false,
			randomTweet: {}
		};
	}

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllTweets().then(tweets => {

        	const rand = getRandomInt(tweets.data.data.length);
        	const copy = Object.assign({}, tweets.data.data[rand])

            this.setState({
                tweets: tweets.data.data,
                isLoading: false,
                randomTweet: copy
            })
        })
    }

	render() {
		const { tweets, isLoading, randomTweet } = this.state;
        console.log('TCL: TweetList -> render -> tweets', tweets);

		return (
			<div>
				{isLoading ?
					<div>
						<Loading type={'spin'} color={'black'} height={'50%'} width={'20%'}/>
					</div>
				:
					<LoadInWrapper>
						<Showcase tweet={randomTweet} />
						<Wrapper> More Tweets </Wrapper>
						<TweetList tweets={tweets.reverse()}/>
					</LoadInWrapper>
				}
			</div>
		)

	}

}

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

export default FrontPage;
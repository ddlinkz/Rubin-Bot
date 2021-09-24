import React from 'react';

import { TweetList, Showcase, Loading, MoreTweets } from '../components';

import styled, { keyframes } from 'styled-components';

const PageContainer = styled.div`
	height: 90%;
`

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const LoadInWrapper = styled.div`
	animation-name: ${fadeIn};
	animation-duration: 4s;
`

const FrontPage = ({isLoading, tweets, randomTweet}) => {
	return (
		<PageContainer>
			{isLoading ?
				<div>
					<Loading type={'spin'} color={'black'} height={'50%'} width={'20%'}/>
				</div>
			:
				<LoadInWrapper>
					<Showcase tweet={randomTweet}
							  tweet_id={randomTweet.tweet_id} />
					<MoreTweets />
					<TweetList tweets={tweets.reverse()}/>
				</LoadInWrapper>
			}
		</PageContainer>
	)
}

export default FrontPage;
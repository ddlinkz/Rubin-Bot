import React, { useState, useEffect } from 'react';

import { TweetList, Showcase, Loading, MoreTweets } from '../components';

import styled, { keyframes } from 'styled-components';

import api from '../api';

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
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function fetchComments() {
			if(randomTweet.tweet_id !== undefined){
				let response = await api.getCommentId(randomTweet.tweet_id);
				response = await response.data.data;
				setComments(response);
			}
		}

		async function putPageView() {
            if(!isLoading && randomTweet.tweet_id !== undefined){
            	const body = {};
            	const tweet_body = {};
            	body.route = window.location.pathname;
                tweet_body.route = "/tweets/" + randomTweet.tweet_id;
                api.putPageView(tweet_body);
	            api.putPageView(body);
            }
		} // Necessary to update Tweet as well as FrontPage ("/")

		if(!isLoading){
			fetchComments();
			putPageView();
		}
	});

	return (
		<PageContainer>
			{isLoading ?
				<div>
					<Loading type={'spin'} color={'black'} height={'50%'} width={'20%'}/>
				</div>
			:
				<LoadInWrapper>
					<Showcase tweet={randomTweet}
							  tweet_id={randomTweet.tweet_id}
							  comments={comments} />
					<MoreTweets />
					<TweetList tweets={tweets}/>
				</LoadInWrapper>
			}
		</PageContainer>
	)
}

export default FrontPage;
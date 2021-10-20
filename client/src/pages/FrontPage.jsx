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
	const [viewCount, setViewCount] = useState(0);

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

		async function fetchPageView() {
			if(!isLoading && randomTweet.tweet_id !== undefined){
				let response = await api.getPageView(randomTweet.tweet_id);
				if(response.data.data !== null){
					const view_count = response.data.data.view_count;
					if(view_count !== null){
						setViewCount(response.data.data.view_count);
					}
				}
			}
		}

		if(!isLoading){
			fetchComments();
			putPageView();
			fetchPageView();
		}
	}, [isLoading, randomTweet]);

	return (
		<PageContainer>
			{isLoading ?
				<div>
					<Loading type={'spin'} color={'black'} height={'50%'} width={'20%'}/>
				</div>
			:
				<LoadInWrapper>
					<i> Random Tweet of the day: </i>
					<Showcase tweet={randomTweet}
							  tweet_id={randomTweet.tweet_id}
							  comments={comments}
							  view_count={viewCount} />
					<MoreTweets />
					<TweetList tweets={tweets}/>
				</LoadInWrapper>
			}
		</PageContainer>
	)
}

export default FrontPage;
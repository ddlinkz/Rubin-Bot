import React, { useState, useEffect } from 'react';
import api from '../api';

// eslint-disable-next-line
import { useLocation, Link, Router } from 'react-router-dom';

import styled from 'styled-components';

import { size } from '../style';

const SearchHeader = styled.div`
	text-align: center;
	font-size: 48px;

	@media (max-width: ${size.tablet} ){
		font-size: 32px;
	}
`

const SearchContainer = styled.div`
	padding: 10px;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 24px;
	color: black;
	font-style: italic;
	padding: 5px;
`

const SearchPage = () => {
	// eslint-disable-next-line
	const [hasError, setErrors] = useState(false);
	const [tweets, setTweets] = useState([]);

	useEffect(() => { 
		api.getAllTweets().then(tweets => {
			setTweets({tweets: tweets.data.data});
		})
	}, [])

	console.log(tweets.tweets);

	const { search } = useLocation();
	const query = new URLSearchParams(search).get('s');
	//const [searchQuery, setSearchQuery] = useState(query || '');
	const filteredTweets = filterTweets(tweets.tweets, query);

    console.log('TCL: TweetList -> render -> tweets');

    return (
		<SearchContainer>
			{filterTweets === null || filterTweets.length === 0 ?
				<SearchHeader>
					<i> No Results for "{query}" </i>		
				</SearchHeader>
			:
				<div>
					<SearchHeader>
						<i> Search results for "{query}" </i>
					</SearchHeader>
		            <ul>
		                {filteredTweets && filteredTweets.map(tweet => (
		                	<StyledLink to ={`/tweets/${tweet.tweet_id}`}>
		                    	<li key={tweet.tweet_id}>
		                    		{tweet.text_string} - Posted on {tweet.date}
		                    	</li>
		                    </StyledLink>
		                ))}
		            </ul>
		        </div>
			}
		</SearchContainer>
	)
}

export default SearchPage; 


const filterTweets = (tweets, query) => {
    if (!query) {
        return tweets;
    }

    if(tweets == null){
    	return [];
    }

    return tweets.filter((tweet) => {
        const tweetText = tweet.text_string.toLowerCase();
        return tweetText.includes(query);
    });
};
import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import styled from 'styled-components';

const Wrapper = styled.div`
	width: 33.33%;
	height: auto;
	display: block;
	margin: auto;
`

const imgStyle = {
	maxWidth: "100%",
	Height: "auto"
}



const TweetDiv = (tweet) => (
	<Wrapper>
		<Link to ={`/tweets/${tweet.tweet_id}`}>
			<LazyLoadImage style={imgStyle} alt={tweet.alt} src={tweet.tweet} effect="blur" />
		</Link>
	</Wrapper>
)

export default TweetDiv;
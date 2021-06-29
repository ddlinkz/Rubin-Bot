import React from 'react'

// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components'

const ImgWrapper = styled.div`
	display: block;
	margin: auto;
	width: 50%;
	padding: 10px;
`;

const imgStyle = {
	maxWidth: "100%",
	maxHeight: "100%"
}

const MainTweet = (tweet) => (
	<ImgWrapper>
		<Link to ={`/tweets/${tweet.tweet_id}`}>
			<img style={imgStyle} src={tweet.tweet} alt={tweet.alt}/>
		</Link>
	</ImgWrapper>
)

export default MainTweet;
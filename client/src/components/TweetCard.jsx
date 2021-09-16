import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const imgStyle = {
	height: "auto",
	width: "100%"
}

const Wrapper = styled.div`
	&.standard {
		flex: 0 0 33.333333%;
		margin: auto;
		display: block;
	}
`

const TweetCard = ({tweet, standard}) => {
	return (
		<Wrapper className={standard ? 'standard' : ''}>
			<Link to ={`/tweets/${tweet.tweet_id}`}>
				<img style={imgStyle} src={tweet.img} alt={tweet.secure_img}/>
			</Link>
		</Wrapper>
	);
};

export default TweetCard;
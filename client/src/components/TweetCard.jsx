import React from 'react';
import '../style/TweetCard.css'
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const imgStyle = {
	height: "100%",
	width: "200%"
}

const TweetContainer = styled.div`
	width: 49%;
	height: 100%;
	float: left;
	display: flex;
	justify-content: center;
`

const STYLES = ['tweet--default', 'tweet--showcase'];

const SIZES = ['tweet--large', 'tweet--medium']

const TweetCard = ({tweet, cardStyle, cardSize}) => {
	const checkCardStyle = STYLES.includes(cardStyle)
		? cardStyle
		: STYLES[0];

	const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

	return (
		<TweetContainer>
			<Link to ={`/tweets/${tweet.tweet_id}`}>
				<div 
					className={`${checkCardStyle} ${checkCardSize}`}
				>
					<img style={imgStyle} src={tweet.img} alt={tweet.secure_img}/>
				</div>
			</Link>
		</TweetContainer>
	);
};

export default TweetCard;
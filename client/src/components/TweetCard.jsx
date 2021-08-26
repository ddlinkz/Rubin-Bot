import React from 'react';
import '../style/TweetCard.css'
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const imgStyle = {
	maxWidth: "100%",
	maxHeight: "100%"
}

const STYLES = ['tweet--default', 'tweet--showcase'];

const SIZES = ['tweet--large', 'tweet--medium']

const TweetCard = ({tweet, cardStyle, cardSize}) => {
	const checkCardStyle = STYLES.includes(cardStyle)
		? cardStyle
		: STYLES[0];

	const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

	console.log(cardSize);
	console.log(cardStyle);
	console.log(checkCardSize);
	console.log(checkCardStyle);

	return (
		<Link to ={`/tweets/${tweet.tweet_id}`}>
			<div 
				className={`${checkCardStyle} ${checkCardSize}`}
			>
				<img style={imgStyle} src={tweet.img} alt={tweet.secure_img}/>
			</div>
		</Link>
	);
};

export default TweetCard;
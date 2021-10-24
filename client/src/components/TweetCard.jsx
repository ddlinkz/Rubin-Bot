import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const imgStyle = {
	height: "auto",
	width: "100%",
	maxWidth: "600px",
	maxHeight: "600px",
	display: "block",
	margin: "auto"
}

const Wrapper = styled.div`
	display: inline-block;
	width: 89%;
	height: 100%;
	vertical-align: top;

	&.standard {
		flex: 0 0 33.333333%;
		margin: auto;
		display: block;
	}
`

const TweetCard = ({tweet, standard}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

	return (
		<Wrapper className={standard ? 'standard' : ''}>
			<Link to={`/tweets/${tweet.tweet_id}`}>
				<img style={imgStyle} 
					 src={tweet.img} 
					 alt={tweet.secure_img}
					 onClick={() => scrollToTop()}/>
			</Link>
		</Wrapper>
	);
};

export default TweetCard;
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

import { size } from '../style';

const imgStyle = {
	height: "auto",
	width: "100%",
	maxWidth: "500px",
	maxHeight: "500px",
	display: "block",
	margin: "auto"
}

const Wrapper = styled.div`
	display: inline-block;
	width: 90%;
	height: 100%;
	vertical-align: top;

	@media (max-width: ${size.tablet}) {
		width: 100%;
	}

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
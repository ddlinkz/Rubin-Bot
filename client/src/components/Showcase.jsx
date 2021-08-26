import React from 'react'
import { TweetCard, SocialCard } from '../components'
import styled from 'styled-components'

const ShowcaseWrapper = styled.div`
	padding: 20px;
	height: 60vh;
	border: 1px solid black;
`;

const Showcase = (tweet) => {
	
	console.log('Hello');
	console.log(tweet);

	return (
		<ShowcaseWrapper>
			<TweetCard tweet={tweet.tweet}
					   cardStyle='tweet--showcase'
					   cardSize='tweet--large' />
			<SocialCard />
		</ShowcaseWrapper>
	)
}

export default Showcase;
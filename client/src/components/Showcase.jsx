import React from 'react'
import { TweetCard, SocialCard } from '../components'
import styled from 'styled-components'

const ShowcaseWrapper = styled.div`
	padding: 20px;
	height: 60vh;
	border: 1px solid black;
`;

const Showcase = ({tweet, comments, tweet_id}) => {
	
	return (
		<ShowcaseWrapper>
			<TweetCard tweet={tweet}
					   cardStyle='tweet--showcase'
					   cardSize='tweet--large' />
			<SocialCard comments={comments}
						tweet_id={tweet_id} />
		</ShowcaseWrapper>
	)
}

export default Showcase;
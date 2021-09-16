import React from 'react'
import { TweetCard, SocialCard } from '../components'
import styled from 'styled-components'

import { size } from '../style'

const ShowcaseWrapper = styled.div`
	padding: 20px;
	height: 80vh;

	@media (max-width: ${size.tablet}) {
		height: 100%;
	}
`

const TweetContainer = styled.div`
	width: 49%;
	height: 100%;
	float: left;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${size.tablet}) {
		width: 100%;
	}
`

const Showcase = ({tweet, comments, tweet_id}) => {
	
	return (
		<ShowcaseWrapper>
			<TweetContainer>
				<TweetCard tweet={tweet}
						   standard={false} />
			</TweetContainer>
			<SocialCard comments={comments}
						tweet_id={tweet_id} />
		</ShowcaseWrapper>
	)
}

export default Showcase;
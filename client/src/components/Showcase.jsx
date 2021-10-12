import React from 'react'
import { TweetCard, SocialCard, ViewData } from '../components'
import styled from 'styled-components'

import { size } from '../style'

const ShowcaseWrapper = styled.div`
	padding: 20px 0px 20px 20px;
	height: 80vh;

	@media (max-width: ${size.tablet}) {
		height: 100%;
		padding: 20px;
	}
`

const TweetContainer = styled.div`
	width: 49%;
	height: 90%;
	float: left;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${size.tablet}) {
		width: 100%;
	}
`

const DataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-around;
	width: 100%;
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
			<DataContainer>
				<ViewData>
					View Count
				</ViewData>
				<ViewData data={tweet.user_count}>
					User Count
				</ViewData>
			</DataContainer>
		</ShowcaseWrapper>
	)
}

export default Showcase;
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
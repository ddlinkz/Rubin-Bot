import React from 'react';
import { CommentContainer, ViewData } from '../../components';

import { size } from '../../style';

import styled from 'styled-components';

const SocialWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 49%;
	height: 100%;
	text-align: center;

	@media (max-width: ${size.tablet}) {
		width: 100%;
		height: 800px;
	}
`

// Here to float right for comments/viewcount

const SocialCard = ({comments, tweet_id}) => {
	
	return (
		<SocialWrapper>
			<CommentContainer comments={comments}
							tweet_id={tweet_id} />
			<ViewData>
				View Count
			</ViewData>
			<ViewData>
				Subscriber Count
			</ViewData>
		</SocialWrapper>
	)
}

export default SocialCard
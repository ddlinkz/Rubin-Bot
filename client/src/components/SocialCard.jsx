import React from 'react';
import { Comments, ViewData } from '../components';

import styled from 'styled-components';

const SocialWrapper = styled.div`
	float: right;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 49%;
	height: 100%;
	border: 1px black solid;
	text-align: center;
`

// Here to float right for comments/viewcount

const SocialCard = () => {
	
	return (
		<SocialWrapper>
			<Comments />
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
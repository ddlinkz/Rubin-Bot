import React from 'react';

import styled from 'styled-components';

import { size } from '../style'

const Wrapper = styled.div`
	font-family: inherit;
	font-style: italic;
	padding: 25px;
	font-size: 32px;
	text-align: center;

	@media (min-width: ${size.tablet}) {
		font-size: 40px;
		padding-left: 20px;
	}
`

const MoreTweets = () => {
	return (
		<Wrapper> 
			More Tweets 
		</Wrapper>
	)
}

export default MoreTweets;
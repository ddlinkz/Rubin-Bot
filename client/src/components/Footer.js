import React from 'react';

import styled from 'styled-components'

const FooterContainer = styled.div`
	background-color: lightgrey;
	font-family: inherit;
	height: 10vh;
	width: 100%;
	margin-bottom: 0;
	position: absolute;
	display: flex;
	justify-content: space-around;
`
const TextWrapper = styled.div`
	float: ${props => props.right ? "right" : "left"};
	display: inline-block;
	text-align: left;
	padding-top: 20px;
	margin: 0;
`

const Footer = () => {
	
	return (
		<FooterContainer>
			<TextWrapper>
				Site created by Austin Brown
				<br />
				Twitter
				<br />
				Instagram
				<br />
				Website
			</TextWrapper>
			<TextWrapper right>
				Tweets and images created by Rick Rubin
				<br />
				Twitter
			</TextWrapper>
		</FooterContainer>
	)
}

export default Footer;

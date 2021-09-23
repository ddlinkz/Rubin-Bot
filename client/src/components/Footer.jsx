import React from 'react';

import styled from 'styled-components'

import { size } from '../style';

const FooterContainer = styled.div`
	background-color: lightgrey;
	color: grey;
	font-family: inherit;
	bottom: 0;
	height: 7rem;
	width: 100%;
	margin-bottom: 0;
	position: absolute;
	font-size: 1em;
	display: flex;
	justify-content: space-around;
	// border: 1px solid black;
`
const TextWrapper = styled.div`
	float: ${props => props.right ? "right" : "left"};
	text-align: left;
	overflow: 
	margin: 0;
	padding: 15px;

	width: 50%;
	// border: 1px solid black;

	@media (max-width: ${size.mobileL}) {
		font-size: 0.8em;
		padding: 10px;
	}
`
const Linkwrapper = styled.a`
	text-decoration: none;
	font-style: italic;

	&:visited {
		color: grey;
	}

	&:hover {
		color: black;
	} 
`

const Footer = () => {
	
	return (
		<FooterContainer>
			<TextWrapper>
				Site created by Austin Brown
				<br />
				<Linkwrapper href="https://github.com/ddlinkz" 
				   target="_blank"
				   rel="noreferrer">Github</Linkwrapper>
				<br />
				<Linkwrapper href="https://www.instagram.com/ddlinkz/" 
				   target="_blank"
				   rel="noreferrer">Instagram</Linkwrapper>
			</TextWrapper>
			<TextWrapper right>
				Tweets and images created by Rick Rubin
				<br />
				<Linkwrapper href="https://twitter.com/RickRubin" 
				   target="_blank"
				   rel="noreferrer">Twitter</Linkwrapper>
			</TextWrapper>
		</FooterContainer>
	)
}

export default Footer;

import React from 'react';

import styled, { keyframes } from 'styled-components';

import { size } from '../style';

const marqueeAnimation = keyframes`
	0% { right: 100%; }
	50% { right: -40%; }
	100% { right: -40%; }
`

const marqueeMobileAnimation = keyframes`
	0% { right: 100%; }
	50% { right: -100%; }
	100% { right: -100%; }
`

const MarqueeOuterDiv = styled.div`
	overflow: hidden;
	position: relative;
	transform: rotate(270deg);
	transform-origin: 0% 0%;
	width: 90vh;
	height: 8%;
	bottom: -500px;
	font-size: 3em;
	border: 1px solid black;
	border-left: 2px solid black;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: ${size.tablet}) {
		font-size: 2em;
		transform: none;
		bottom: 0;
		transform-origin: 50% 50%;
		width: 100%;
		height: 100%;
		border: none;
	}
`

const MarqueeContainer = styled.div`
	display: inline-block;
	height: 100%;
	width: 10%;

	@media (max-width: ${size.tablet}) {
		height: 60px;
		width: 100%;
	}
`

const RandomBanner = styled.div`
	white-space: nowrap;
	position: absolute;
	top: inherit;
	left: inherit;
	font-style: italic;
	animation: ${marqueeAnimation} 15s linear ${props => props.timeDelay || "0s"} infinite;
	
	@media (max-width: ${size.tablet}) {
		animation: ${marqueeMobileAnimation} 15s linear ${props => props.timeDelay || "0s"} infinite;
	}
`

const Marquee = () => {
	
	return (
		<MarqueeContainer>
			<MarqueeOuterDiv>
				<RandomBanner > Random Tweet of the Day</RandomBanner>
				<RandomBanner timeDelay="-5s"> Random Tweet of the Day</RandomBanner>
				<RandomBanner timeDelay="-10s"> Random Tweet of the Day</RandomBanner>
			</MarqueeOuterDiv>
		</MarqueeContainer>
	)
}

export default Marquee;
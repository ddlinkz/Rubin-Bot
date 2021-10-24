import React from 'react';

import styled, { keyframes } from 'styled-components';

import { size } from '../style';

const marqueeAnimation = keyframes`
	0% { top: 140%; }
	50% { top: -100%; }
	100% {top: -100%; }
`

const MarqueeOuterDiv = styled.div`
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 150%;
	width: 4%;
	top: -25%;
	font-size: 20px;
	border-bottom: 2px solid black;

	@media (max-width: ${size.tablet}) {
		height: 570px;
		font-size: 12px;
	}
`

const RandomBanner = styled.div`
	transform: translate(-50%, -50%) rotate(270deg);
	white-space: nowrap;
	position: absolute;
	margin-left: 10px;
	margin-bottom: 50px;
	top: inherit;
	left: inherit;
`

const RBOne = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear infinite;
`

const RBTwo = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 2s infinite;
`

const RBThree = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 4s infinite;
`

const RBFour = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 6s infinite;
`

const RBFive = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 8s infinite;
`

const RBSix = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 10s infinite;
`

const RBSeven = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 12s infinite;
`

const RBEight = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 14s infinite;
`

const RBNine = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 16s infinite;
`

const RBTen = styled(RandomBanner)`
	animation: ${marqueeAnimation} 20s linear 18s infinite;
`

const Marquee = () => {
	
	return (
		<MarqueeOuterDiv>
			<RBOne> RANDOM TWEET OF THE DAY</RBOne>
			<RBTwo> RANDOM TWEET OF THE DAY</RBTwo>
			<RBThree> RANDOM TWEET OF THE DAY</RBThree>
			<RBFour> RANDOM TWEET OF THE DAY</RBFour>
			<RBFive> RANDOM TWEET OF THE DAY</RBFive>
			<RBSix> RANDOM TWEET OF THE DAY</RBSix>
			<RBSeven> RANDOM TWEET OF THE DAY</RBSeven>
			<RBEight> RANDOM TWEET OF THE DAY</RBEight>
			<RBNine> RANDOM TWEET OF THE DAY</RBNine>
			<RBTen> RANDOM TWEET OF THE DAY</RBTen>
		</MarqueeOuterDiv>
	)
}

export default Marquee;
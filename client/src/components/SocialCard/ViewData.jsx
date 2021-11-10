import React, {useState, useEffect} from 'react';

import styled from 'styled-components';

const ViewDataContainer = styled.div`
	width: 100%;
	height: 80px;
	float: left;
	font-family: inherit;
	font-style: italic;
	text-align: center;
	font-size: 24px;

	@media (max-width: 450px) {
		flex-grow: 1;
		height: 8%;
	}
`

const ViewData = ({children, data_val}) => {
	const [count, setCount] = useState("0");

	useEffect(() => {
		let start = 0;
		// first three numbers from props
		const end = parseInt(String(data_val).slice(0,3));
		if (isNaN(end)) return;
		// if zero, return
		if (start === end) return;

		// find duration per increment
		let totalMilSecDur = 5;
		let incrementTime = (totalMilSecDur / end) * 1000;

		// timer increments start counter 
		// then updates count
		// ends if start reaches end
		let timer = setInterval(() => {
			start += 1;
			setCount(String(start) + String(data_val).substring(3))
			if (start === end) clearInterval(timer)       
		}, incrementTime);

		// dependency array
	}, [data_val, children]);

	return (
		<ViewDataContainer>
			{children}: {count}
		</ViewDataContainer>
	)
}

export default ViewData;

// Animated Counter code from:
// https://dev.to/cooljasonmelton/building-an-animated-counter-with-react-and-css-59ee
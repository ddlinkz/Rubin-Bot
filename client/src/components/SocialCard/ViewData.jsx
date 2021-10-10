import React from 'react';

import styled from 'styled-components';

const ViewDataContainer = styled.div`
	width: 100%;
	height: 80px;
	float: left;
	font-family: inherit;
	border: 1px black solid;
	border-radius: 25px;
	font-style: italic;
	text-align: center;

	@media (max-width: 450px) {
		flex-grow: 1;
		height: 8%;
	}
`

const ViewData = ({children, data}) => {

	return (
		<ViewDataContainer>
			{children}
			<br/>
			{data}
		</ViewDataContainer>
	)
}

export default ViewData
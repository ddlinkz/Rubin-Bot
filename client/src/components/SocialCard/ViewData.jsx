import React from 'react';

import styled from 'styled-components';

const ViewDataContainer = styled.div`
	width: 200px;
	height: 80px;
	float: left;
	font-family: inherit;
	border: 1px black solid;
	border-radius: 25px;
	font-style: italic;

	@media (max-width: 900px) {
		width: 170px;
	}

	@media (max-width: 450px) {
		flex-grow: 1;
		height: 8%;
	}
`

const ViewData = ({children}) => {

	return (
		<ViewDataContainer>
			{children}
		</ViewDataContainer>
	)
}

export default ViewData
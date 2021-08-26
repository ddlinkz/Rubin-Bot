import React from 'react';

import styled from 'styled-components';

const ViewDataContainer = styled.div`
	width: 200px;
	height: 80px;
	font-family: inherit;
	display: inline-block;
	border: 1px black solid;
	font-style: italic;
`

const ViewData = ({children}) => {

	return (
		<ViewDataContainer>
			{children}
		</ViewDataContainer>
	)
}

export default ViewData
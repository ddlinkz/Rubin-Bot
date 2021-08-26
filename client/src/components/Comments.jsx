import React from 'react';


import styled from 'styled-components';

const CommentsWrapper = styled.div`
	padding: 20px;
	width: 100%;
	height: 80%;
	text-align: center;
	border: 1px black solid;
`

const Comments = () => {
	
	return (
		<CommentsWrapper>
			Comments go here
		</CommentsWrapper>
	)
}

export default Comments
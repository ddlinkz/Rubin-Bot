import React from 'react';

import styled from 'styled-components';

const CommentWrapper = styled.div`
	width: 100%;
	float: left;
	line-height: 1.3;
	font-style: italic;
	text-align: left;
	font-size: 24px;
`

const Comment = ({comment}) => {
	
	return (
		<CommentWrapper>
			{comment.content}
			<br></br>
			- <b>{comment.author}</b>
		</CommentWrapper>
	)
}

export default Comment
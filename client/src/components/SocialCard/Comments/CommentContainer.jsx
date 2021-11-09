import React from 'react';

import styled from 'styled-components';

import { Comment } from '../../../components';

const CommentsWrapper = styled.div`
	padding: 3px;
	width: 100%;
	height: 100%;
	text-align: left;
	font-family: inherit;
	font-style: italic;
	position: relative;
`

const CommentsScroll = styled.div`
	top: 0;
	width: 100%;
	overflow: auto;
	background-color: lightgrey;
	height: 100%;
`

const CommentContainer = ({comments}) => {

	const displayComments = (comments) => {
		if (comments === undefined || comments.length === 0){
			return <div> Add a comment below! </div>
		}

		return comments.map((comment, i) => (
			<Comment comment={comment} key={i} />
		));
	}

	return (
		<CommentsWrapper>
			<CommentsScroll>
				{ displayComments(comments) }
			</CommentsScroll>
		</CommentsWrapper>
	)
}

export default CommentContainer
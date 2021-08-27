import React from 'react';

import styled from 'styled-components';

import { CommentForm, Comment } from '../components';

const CommentsWrapper = styled.div`
	padding: 20px;
	width: 100%;
	height: 80%;
	text-align: center;
	border: 1px black solid;
`

const CommentSection = ({comments, tweet_id}) => {

	return (
		<CommentsWrapper>
			{ comments == undefined || comments.length == 0
				? <div> Comments go here! </div>
				: <> { comments.map((comment, i) => {
					return <Comment comment={comment} key={i} />
					})}
				</>
			}
			<CommentForm tweet_id={tweet_id}/>
		</CommentsWrapper>
	)
}

export default CommentSection
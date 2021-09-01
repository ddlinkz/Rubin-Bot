import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import api from '../api';

import { CommentForm, Comment } from '../components';

const CommentsWrapper = styled.div`
	padding: 20px;
	width: 100%;
	height: 80%;
	text-align: left;
	font-family: inherit;
	font-style: italic;
	border: 1px black solid;
	position: relative;
`

const CommentContainer = ({comments, tweet_id}) => {

	const [comment, setComment] = useState({content: "", author: ""});
	const [localComments, setLocalComments] = useState(comments);

	useEffect(() => {
		setLocalComments(comments);
	}, [comments]);

	const handleChange = (event) => {
		setComment({ ...comment, [event.target.name]: event.target.value });
	};

	const addComment = async (event) => {
		event.preventDefault();
		comment.tweet_id = tweet_id;
		console.log("Comment saved", comment);
		await api.postComment(comment);
		setLocalComments(oldComments => [...oldComments, comment])
	}

	return (
		<CommentsWrapper>
			{ localComments == undefined || localComments.length == 0
				? <div> Comments go here! </div>
				: <> { localComments.map((comment, i) => {
					return <Comment comment={comment} key={i} />
					})}
				</>
			}
			<CommentForm handleChange={handleChange}
						 addComment={addComment} />
		</CommentsWrapper>
	)
}

export default CommentContainer
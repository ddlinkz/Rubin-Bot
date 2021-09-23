import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import api from '../../../api';

import { CommentForm, Comment } from '../../../components';

import { size } from '../../../style'

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

const CommentsScroll = styled.div`
	padding: 10px;
	overflow: auto;
	height: 500px;
	background-color: lightgrey;

	@media (max-width: ${size.tablet}) {
		height: 420px;
	}
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
		setLocalComments([...localComments, comment]);
		setComment({content: "", author: ""});
	}

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
				{ displayComments(localComments) }
			</CommentsScroll>
			<CommentForm content={comment.content}
						 author={comment.author}
						 handleChange={handleChange}
						 addComment={addComment} />
		</CommentsWrapper>
	)
}

export default CommentContainer
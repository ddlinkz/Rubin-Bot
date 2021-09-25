import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import api from '../../../api';

import { CommentForm, Comment } from '../../../components';

const CommentsWrapper = styled.div`
	padding: 15px;
	width: 100%;
	height: 85%;
	text-align: left;
	font-family: inherit;
	font-style: italic;
	border: 1px black solid;
	position: relative;
`

const CommentsScroll = styled.div`
	top: 0;
	width: 100%;
	overflow: auto;
	background-color: lightgrey;
	height: 70%;
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
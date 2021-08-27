import React, { useState } from 'react';

import api from '../api';

const CommentForm = ({tweet_id}) => {

	const [comment, setComment] = useState({content: "", author: ""});

	const handleChange = (event) => {
		setComment({ ...comment, [event.target.name]: event.target.value });
	};

	const addComment = async (event) => {
		event.preventDefault();
		comment.tweet_id = tweet_id;
		console.log("Comment saved", comment);
		await api.postComment(comment);
	}

	return (
		<form onSubmit={addComment} >
			<label>
				Add comment here: 
				<input type="text" name="content" onChange={handleChange} />
				And your name:
				<input type="text" name="author" onChange={handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default CommentForm
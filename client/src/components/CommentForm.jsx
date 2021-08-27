import React, {useState} from 'react';

import api from '../api';

const CommentForm = ({tweet_id}) => {

	const [comment, setComment] = useState();

	const addComment = async (event) => {
		setComment(event.target.value);
	}

	return (
		<form>
			<label>
				Add comment here: 
				<input onChange={addComment} type="text" />
				And your name:
				<input onChange={addComment} type="text" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default CommentForm
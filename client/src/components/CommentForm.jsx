import React from 'react';

const CommentForm = ({handleChange, addComment}) => {

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
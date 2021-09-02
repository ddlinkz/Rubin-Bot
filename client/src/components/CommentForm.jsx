import React from 'react';

import styled from 'styled-components';

const FormWrapper = styled.div`
	position: absolute;
	bottom: 0;
	margin-bottom: 20px;
	font-family: inherit;
	font-style: italic;
	font-weight: bolder;
	width: 100%;
`

const TextInput = styled.textarea`
	width: 70%;
	height: 100px;
	font-family: inherit;
`

const SubmitButton = styled.input`
	position: relative;
	display: block;
	margin: 0 auto;
	right: 22px;
`

const CommentForm = ({content, author, handleChange, addComment}) => {

	return (
		<FormWrapper>
			<form onSubmit={addComment} >
				<label> Add comment here: </label>
					<br />
					<TextInput value={content} type="text" name="content" onChange={handleChange} />
					<br />
				<label> And your name: </label>
					<br />
					<input value={author} type="text" name="author" onChange={handleChange} />
				<br />
				<SubmitButton type="submit" value="Submit" />
			</form>
		</FormWrapper>
	)
}

export default CommentForm
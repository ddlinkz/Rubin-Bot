import React from 'react';

import styled from 'styled-components';

import { size } from '../../../style';

const FormWrapper = styled.div`
	position: relative;
	font-family: inherit;
	font-style: italic;
	font-weight: bolder;
	width: 100%;
	height: 25%;
	margin-top: 20px;

	@media (max-width: ${size.tablet}){
		margin-top: 5px;
	}
`

const TextInput = styled.textarea`
	width: 70%;
	height: 100px;
	font-family: inherit;
`

const SubmitButton = styled.input`
	background-color: #4CAF50;
	border: none;
	color: white;
	padding: 15px 32px;
	position: relative;
	display: block;
	margin: 0 auto;
	transition: transform .2s;

	&:hover {
		transform: scale(1.1);
	}
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
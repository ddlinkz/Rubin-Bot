import React from 'react';

import styled from 'styled-components';

import { Button } from '../../../components';

import { size } from '../../../style';

const FormWrapper = styled.div`
	position: relative;
	display: inline-block;
	font-family: inherit;
	font-style: italic;
	font-weight: bolder;
	margin: 0 auto;
	bottom: 0;
	width: 100%;
	height: 250px;
	text-align: center;
	font-size: 22px;

	@media (max-width: ${size.tablet}){
		margin-top: 5px;
	}
`

const TextInput = styled.textarea`
	width: 70%;
	margin: 0 auto;
	height: 100px;
	font-family: inherit;
`

const CommentForm = ({content, author, handleChange, addComment}) => {
	return (
		<FormWrapper>
			<form onSubmit={addComment}>
				<label> Add comment here: </label>
					<br />
					<TextInput value={content} type="text" name="content" onChange={handleChange} />
					<br />
				<label> And your name: </label>
					<br />
					<input value={author} type="text" name="author" onChange={handleChange} />
				<br />
				<Button type="submit" value="Submit">
					Submit
				</Button>
			</form>
		</FormWrapper>
	)
}

export default CommentForm
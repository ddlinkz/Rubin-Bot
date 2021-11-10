import React, { useState, useEffect } from 'react'
import { TweetCard, ViewData, Marquee, CommentForm, CommentContainer } from '../components'
import styled from 'styled-components'

import api from '../api';

import { size } from '../style';

const ShowcaseWrapper = styled.div`
	height: 90vh;
	border-bottom: 2px grey solid;
	width: 80%;
	margin: auto;

	@media (max-width: ${size.tablet}) {
		height: 100%;
		width: 100%;
	}
`

const TweetContainer = styled.div`
	width: 60%;
	height: 80%;
	float: left;
	padding-bottom: 20px;

	@media (max-width: ${size.tablet}) {
		width: 100%;
	}
`

const DataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-around;
	width: 100%;
	padding-top: 50px;
`

const ShowcaseContainer = styled.div`
	height: 600px;
	width: 100%;

	@media (max-width: ${size.tablet}) {
		height: 100%;
	}
`

const CommentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 39%;
	height: 80%;
	text-align: center;

	@media (max-width: ${size.tablet}) {
		width: 100%;
		height: 500px;
		padding-bottom: 30px;
	}
`

const Showcase = ({tweet, comments, tweet_id, view_count, front_page}) => {
	const [comment, setComment] = useState({content: "", author: ""});
	const [localComments, setLocalComments] = useState(comments);

	useEffect(() => {
		setLocalComments(comments);
	}, [comments]);

	const handleChange = (event) => {
		setComment({...comment, [event.target.name]: event.target.value });
	};

	const addComment = async (event) => {
		event.preventDefault();
		comment.tweet_id = tweet_id;
		console.log("Comment saved", comment);
		await api.postComment(comment);
		setLocalComments([...localComments, comment]);
		setComment({content: "", author: ""});
	}

	return (
		<ShowcaseWrapper>
			<ShowcaseContainer>
				<TweetContainer>
					{front_page ? <Marquee /> : <></>}
					<TweetCard tweet={tweet}
							   standard={false} />
				</TweetContainer>
				<CommentWrapper>
					<CommentContainer comments={localComments}
								      tweet_id={tweet_id} />
				</CommentWrapper>
			</ShowcaseContainer>
			<CommentForm content={comment.content}
				 author={comment.author}
				 handleChange={handleChange}
				 addComment={addComment} />
				<DataContainer>
					<ViewData data_val={view_count}>
						View Count
					</ViewData>
					<ViewData data_val={tweet.user_count}>
						User Count
					</ViewData>
				</DataContainer>
		</ShowcaseWrapper>
	)
}

export default Showcase;
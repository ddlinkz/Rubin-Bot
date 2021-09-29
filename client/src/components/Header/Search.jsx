import React from 'react';

import styled from 'styled-components';

import { size } from '../../style';

import { BsSearch } from "react-icons/bs";

const HiddenText = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`
const Input = styled.input`
	width: 240px;
	font-style: italic;
	font-size: inherit;
	font-family: inherit;
	opacity: 0.2;
	outline-width: 0;
	border: none;
	padding-top: 6.75%;

	@media (max-width: ${size.laptop}) {
		margin: 0 auto;
		text-align: center;
		padding: 10px 5px 10px 30px;
		max-width: 82%;
		min-width: 82%;
	}
`

const SearchIcon = styled(BsSearch)`
	opacity: 20%;
	margin-right: 10px;

	@media (max-width: ${size.laptop}) {
		position: absolute;
		margin: 0 auto;
		padding-top: 18px;
		padding-left: 6%;
	}
`

const Search = () => (
	<>
	    <form action="/search" method="get">
	    	<SearchIcon />
	        <label htmlFor="header-search">
	            <HiddenText> Search Tweets</HiddenText>
	        </label>
	        <Input
	            type="text"
	            id="header-search"
	            placeholder="Search"
	            name="s"
	            autoComplete="off"
	        />
	    </form>
    </>
);

export default Search;

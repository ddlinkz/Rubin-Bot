import React from 'react';

import styled from 'styled-components';

import { size } from '../../style';

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
	margin-right: 10px;
	width: 320px;
	font-style: italic;
	font-size: inherit;
	font-family: inherit;
	opacity: 0.2;
	outline-width: 0;

	@media (max-width: ${size.laptop}) {
		max-width: 90%;
		min-width: 90%;
		margin: 0 auto;
		text-align: center;
	}
`

const Search = () => (
	<>
	    <form action="/search" method="get">
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

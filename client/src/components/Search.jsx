import React from 'react';

import styled from 'styled-components';

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
	width: 225px;
	font-style: italic;
	font-size: inherit;
	border: 0;
	font-family: inherit;
	opacity: 0.2;
	outline-width: 0;
`

const Search = () => (
	<>
	    <form action="/search" method="get">
	        <label htmlFor="header-search">
	            <HiddenText> Search Tweets </HiddenText>
	        </label>
	        <Input
	            type="text"
	            id="header-search"
	            placeholder="Search Tweets"
	            name="s"
	            autoComplete="off"
	        />
	    </form>
    </>
);

export default Search;

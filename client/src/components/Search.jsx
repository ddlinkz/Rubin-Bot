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
	width: 300px;
	font-style: italic;
	font-size: inherit;
	font-family: inherit;
	border: 0;
	opacity: 0.2;
	outline-width: 0;
	will-change: transform, box-shadow, z-index;
`

const StyledInput = styled.div`
	width: 300px;
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
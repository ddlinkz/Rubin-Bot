import React from 'react';

import styled from 'styled-components'

import { HomeRoute, Search } from '../components';

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 10%;
	font-family: 'Cardo', serif;
	font-size: 56px;
	padding: 2%;
`

const Header = () => {
	return (
		<NavWrapper>
			<HomeRoute />
			<Search />
		</NavWrapper>
	)
}

export default Header;
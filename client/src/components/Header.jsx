import React from 'react';

import styled from 'styled-components';

import { HomeRoute, Search, NavToggle } from '../components';
import { device } from '../style';

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 8%;
	font-family: 'Cardo', serif;
	font-size: 30px;
	padding: 2%;
	position: sticky;
	top: 0;
	background-color: white;

	@media ${device.laptop} {
		font-size: 34px;
	}

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
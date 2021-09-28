import React, {useState} from 'react';

import styled from 'styled-components';

import { BurgerMenu, HomeRoute, AboutRoute, Search } from '../../components';
import { size } from '../../style';

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 5%;
	font-family: 'Cardo', serif;
	font-size: 3em;
	padding: 1%;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	border-bottom: 1px solid grey;

	@media (max-width: ${size.mobileL}) {
		font-size: 2em;
	}

`
const NavContainer = styled.div`
	flex-grow: 0.2;
	display: flex;
	justify-content: space-between;
	font-size: 0.5em;
	padding-right: 20px;

	@media (max-width: ${size.laptop}) {
		display: none;
	}
`

const Header = () => {
	const [open, setOpen] = useState(false);

	const toggleBurger = () => {
		setOpen(!open);
	}

	return (
		<NavWrapper>
			<HomeRoute />
			<NavContainer>
				<Search />
				<AboutRoute />
			</NavContainer>
			<BurgerMenu toggleBurger={toggleBurger} open={open}/>
		</NavWrapper>
	)
}

export default Header;
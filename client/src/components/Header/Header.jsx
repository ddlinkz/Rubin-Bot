import React, {useState} from 'react';

import styled from 'styled-components';

import { BurgerMenu, HomeRoute, AboutRoute, Search } from '../../components';
import { size } from '../../style';

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 5%;
	font-family: 'Cardo', serif;
	font-size: 50px;
	padding: 1%;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	border-bottom: 1px solid grey;

`
const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: ${size.tablet}) {
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
				<AboutRoute />
				<Search />
			</NavContainer>
			<BurgerMenu toggleBurger={toggleBurger} open={open}/>
		</NavWrapper>
	)
}

export default Header;
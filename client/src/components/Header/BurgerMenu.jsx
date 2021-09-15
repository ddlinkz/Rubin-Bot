import React from 'react'

import { AboutRoute, Search, BurgerIcon } from '../../components';

import styled from 'styled-components';

import { size } from '../../style';

const Container = styled.div`
	@media (min-width: ${size.laptop}){
		display: none;
	}
`
const SideNavMenu = styled.div`
	position: absolute;
	z-index: 3;
	top: 0;
	height: 100vh;
	width: 50%;
	left: -100%;
	padding-top: 50px;
	text-align: center;
	transition: all 0.4s;

	&.showBar {
		left: 0;
		background-color: blue;
	}

	@media (max-width: 300px) {
		width: 100%;
	}
`

const BurgerMenu = ({toggleBurger, open}) => {
	
	return (
		<Container>
			<BurgerIcon toggleBurger={toggleBurger}/>
			<SideNavMenu className={open ? '' : 'showBar'}>
				<AboutRoute />
				<Search />
			</SideNavMenu>
		</Container>
	)
}

export default BurgerMenu;
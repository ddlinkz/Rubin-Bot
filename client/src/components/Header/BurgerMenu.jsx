import React from 'react'

import { AboutRoute, Search, BurgerIcon } from '../../components';

import styled from 'styled-components';

import { size } from '../../style';

const Container = styled.div`
	@media (min-width: ${size.laptop})
		display: none;
	}
`
const SideNavMenu = styled.div`
	position: absolute;
	z-index: 3;
	top: 0;
	height: 100vh;
	width: 50%;
	right: 0;
	padding-top: 50px;
	text-align: center;

	${({ open }) => open && `
		background: blue;
		left: 0;
	`}
`

const BurgerMenu = ({toggleBurger, open}) => {
	
	return (
		<Container>
			<BurgerIcon toggleBurger={toggleBurger}/>
			{ open ? 
				<SideNavMenu open={open}>
					<AboutRoute />
					<Search />
				</SideNavMenu> :
			 <> </>}
		</Container>
	)
}

export default BurgerMenu;
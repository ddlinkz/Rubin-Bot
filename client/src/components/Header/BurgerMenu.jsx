import React from 'react'

import { AboutRoute, Search, BurgerIcon } from '../../components';

import styled from 'styled-components';

import { size } from '../../style';

const Container = styled.div`
	@media (min-width: ${size.tablet}) {
		display: none;
	}
`
const SideNavMenu = styled.div`
	z-index: 10px;
	position: fixed;
`

const BurgerMenu = ({toggleBurger, open}) => {
	
	return (
		<Container onClick={toggleBurger} >
			<BurgerIcon />
			{ open ? 
				<>
					<AboutRoute />
					<Search />
				</> :
			 <> </>}
		</Container>
	)
}

export default BurgerMenu;
import React from 'react';

import '../../style/BurgerStyle.css'

const BurgerIcon = ({toggleBurger}) => {
	return (
		<div class="burger" onClick={toggleBurger}>
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
	)
}

export default BurgerIcon;
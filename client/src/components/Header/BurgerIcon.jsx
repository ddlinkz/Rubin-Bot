import React from 'react';

import '../../style/BurgerStyle.css'

const BurgerIcon = ({toggleBurger}) => {
	return (
		<div className="burger" onClick={toggleBurger}>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</div>
	)
}

export default BurgerIcon;
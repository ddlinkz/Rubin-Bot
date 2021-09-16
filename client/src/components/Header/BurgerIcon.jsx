import React from 'react';

import '../../style/BurgerStyle.css'

const BurgerIcon = ({toggleBurger, open}) => {
	return (
		<div className="burger" onClick={toggleBurger}>
			<div className={open ? "change bar1" : "bar1"}></div>
			<div className={open ? "change bar2" : "bar2"}></div>
			<div className={open ? "change bar3" : "bar3"}></div>
		</div>
	)
}

export default BurgerIcon;
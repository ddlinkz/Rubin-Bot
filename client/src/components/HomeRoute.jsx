import React from 'react';

import styled from 'styled-components';

// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavLink = styled(Link)`
	text-decoration: none;

	&:visited {
		color: black;
	}
  }
`;

const HomeRoute = () => (
	<div>
		<NavLink to="/">
			<i> Rubin Tweets </i>
		</NavLink>
	</div>
)

export default HomeRoute;
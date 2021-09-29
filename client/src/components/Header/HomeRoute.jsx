import React from 'react';

import styled from 'styled-components';

// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HomeContainer = styled.div`
	flex-grow: 5;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: black;

	&:visited {
		color: black;
	}
  }
`;

const HomeRoute = () => (
	<HomeContainer>
		<NavLink to="/">
			<i> Rubin Tweets </i>
		</NavLink>
	</HomeContainer>
)

export default HomeRoute;
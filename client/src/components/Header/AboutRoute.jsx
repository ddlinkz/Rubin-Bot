import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';

const AboutContainer = styled.div`
	flex-grow: 0.05;
	font-style: italic;
`

const NavLink = styled(Link)`
	text-decoration: none;

	&:visited {
		color: black;
	}
  }
`;

const AboutRoute = () => {

	return (
		<AboutContainer>
			<NavLink to="/about">
				About
			</NavLink>
		</AboutContainer>
	)
}

export default AboutRoute;
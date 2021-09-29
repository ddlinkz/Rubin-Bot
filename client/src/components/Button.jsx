import React from 'react';

import styled from 'styled-components';

import { size } from '../style';

const ButtonContainer = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    margin: 25px auto;
    display: block;
    font-size: 16px;
    transition: transform .2s;

    @media (max-width: ${size.mobileL}) {
        font-size: 10px;
    }

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`

const Button = ({children, onClick}) => {
	return (
		<ButtonContainer onClick={onClick}>
			{children}
		</ButtonContainer>
	)
}

export default Button;
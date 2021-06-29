import React from 'react';

import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
 `

const Loading = ({type, color}) => {
	return (
		<Container>
			<ReactLoading type={'bubbles'} color={'black'} height={'10%'} width={'10%'}/>
		</Container>
	)
}

export default Loading;
import React from 'react';

import { ApiWrapper } from '../components';

import styled from 'styled-components';

const AppContainer = styled.div`
    position: relative;
    min-height: 100vh;
    padding-bottom: 7rem;
`

class App extends React.Component {
    render () {

        document.body.style.margin = "0";
        document.body.style.padding = "0";

        return (
            <AppContainer>
                <ApiWrapper />
            </AppContainer>
        )
    }
}

export default App;

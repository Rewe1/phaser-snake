import React from 'react';
import styled from 'styled-components';

const AppScreen = styled.div
`
    width: auto;
    height: 100vh;
    background-color: #333;
    color: white;
`;

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <AppScreen>Hi !</AppScreen>
        );
    }
}

export default App;
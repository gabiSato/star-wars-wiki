import React from 'react';
import Routes from './routes';
import { PeopleProvider } from './context/People';

const App = () => {
    return (
    <PeopleProvider>
        <Routes />
    </PeopleProvider>
)};

export default App;
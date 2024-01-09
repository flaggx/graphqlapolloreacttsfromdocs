import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';

import DisplayBooks from './components/DisplayBooks';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <h2>My first Apollo app 🚀</h2>
            <DisplayBooks />
            <Footer />
        </div>
    );
};

export default App;
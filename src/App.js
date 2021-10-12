import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './pages/Router';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from 'utils/store';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Router />
                <Footer />
            </Provider>
        </BrowserRouter>
    );
}

export default App;

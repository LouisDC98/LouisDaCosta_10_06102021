import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Router />
            <Footer />
        </BrowserRouter>
    );
}

export default App;

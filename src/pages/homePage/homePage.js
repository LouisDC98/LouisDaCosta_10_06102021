import React from 'react';
import Header from '../../components/Header/Header';
import Slogan from '../../components/Slogan/Slogan';

function homePage() {
    return (
        <div>
            <Header sign={'in'} />
            <Slogan />
        </div>
    );
}

export default homePage;

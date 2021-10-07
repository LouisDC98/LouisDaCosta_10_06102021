import React from 'react';
import styled from 'styled-components';
import Slogan from '../../components/Slogan/Slogan';
import Catch from '../../components/Catch/Catch';

function HomePage() {
    return (
        <React.Fragment>
            <Slogan />
            <CatchShape>
                <Catch
                    logo={'chat'}
                    title={'You are our #1 priority'}
                    subtitle={
                        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                    }
                />
                <Catch
                    logo={'money'}
                    title={'More savings means higher rates'}
                    subtitle={'The more you save with us, the higher your interest rate will be!'}
                />
                <Catch
                    logo={'security'}
                    title={'Security you can trust'}
                    subtitle={
                        'We use top of the line encryption to make sure your data and money is always safe.'
                    }
                />
            </CatchShape>
        </React.Fragment>
    );
}

const CatchShape = styled.div`
    margin-top: -4px;
    @media (min-width: 920px) {
        display: flex;
        justify-content: space-around;
    }
`;

export default HomePage;

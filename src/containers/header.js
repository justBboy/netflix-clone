import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg';

const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer

import styled from '@emotion/styled';
import {Logo} from "assets/images";
import {NavLink} from 'react-router-dom';

export const LayoutComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 20px;
    background: #0000ffc2;
    color: white;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    padding: 20px;
    background: #0000ffc2;
    color: white;
`
export const HeaderLogoContainer = styled.div`
    width: 100px;
    height: 100px;
`

export const HeaderLogo = styled.img`
    width: 100px;
    height: 100px;
`

HeaderLogo.defaultProps = {src: Logo}

export const NavContainer = styled.nav`
    display: flex;
    gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
    font-size: 20px;
    color: white;
    text-decoration: none;
`
export const Link = styled.a`

`

import {
    Footer,
    Header,
    HeaderLogoContainer,
    LayoutComponent,
    Main,
    HeaderLogo,
    StyledNavLink,
    NavContainer,
    Link
} from "./style"
import {LayoutProps} from "./types";
import React from "react";

function Layout({children}: LayoutProps) {
    return (
        <LayoutComponent>
            <Header>
                <HeaderLogoContainer>
                    <Link href="/">
                    <HeaderLogo />
                    </Link>
                </HeaderLogoContainer>
                <NavContainer>
                    <StyledNavLink
                        to='/'
                        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Home
                    </StyledNavLink>
                    <StyledNavLink
                        to='/about'
                        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        About
                    </StyledNavLink>
                    <StyledNavLink
                        to='/users'
                        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Users
                    </StyledNavLink>
                    <StyledNavLink
                        to='/clients'
                        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>
                        Clients
                    </StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
            <Footer>
                <HeaderLogoContainer>
                    <HeaderLogo />
                </HeaderLogoContainer>
            </Footer>
        </LayoutComponent>
    )
}

export default Layout;

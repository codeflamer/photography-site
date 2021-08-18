import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Navbar = () => {
    return (
        <NavBar>
            <NavBarContainer>
                <NavBarContent>
                    <LogoContainer>
                        <Link to='/'><span>Logo..</span></Link>
                    </LogoContainer>
                    <ActionButtonContainer>
                        <Link to='/login'><span>Login</span></Link>
                        <Link to='/signup'><span>Sign In</span></Link>
                    </ActionButtonContainer>
                    <MobileButton>
                        <i className="fas fa-bars"></i>
                    </MobileButton>
                </NavBarContent>
            </NavBarContainer>
        </NavBar>
    )
}

const NavBar = styled.nav`
    // border:1px solid red;
    padding:24px 16px;
    @media(min-width:480px){
        padding:30px 50px;
    }
`;
const NavBarContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    // border:1px solid red;
    width:100%;
    max-width:2000px;
`;
const NavBarContent = styled.div`
    // border:1px solid blue;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const LogoContainer = styled.div``;
const ActionButtonContainer = styled.div`
    display:none;
    span{
        display:inline-block;
        margin-left:60px;
    }
    @media(min-width:480px){
        display:flex;
    }
`;
const MobileButton = styled.div`
    height:19px;
    i{
        
        height:16px;
        width:20px;
        cursor:pointer;
    }
    @media(min-width:480px){
        display:none;
    }
`;

export default Navbar

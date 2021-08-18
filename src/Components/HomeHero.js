import React from 'react'
import styled from 'styled-components'

const HomeHero = () => {
    return (
        <Hero>
           <HeroContainer>
               <HeroContent>
                   <FirstContent>
                        <ImageSmall className='top-left' src='https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80' alt='picture of a person holding a camera'/>
                        <ImageTall className='top-right' src='https://images.unsplash.com/photo-1596923322832-ada855ab1a61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80' alt='Image of a guy taking a picture'/>
                   </FirstContent>
                   <SecondContent>
                        <h1>There are always two people : <br/>
                         the photographer and the viewer </h1>
                   </SecondContent>
                   <ThirdContent>
                        <ImageTall className='bottom-left' src='https://images.unsplash.com/photo-1504093376055-b3094b674dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt='picture of a camera lens sitting on a table'/>
                        <ImageSmall className='bottom-right' src='https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' alt='Image of a camera lying down on a surface'/>
                   </ThirdContent>
               </HeroContent>
           </HeroContainer> 
        </Hero>
    )
}


const Hero  = styled.section`
    padding:0 34px;
    margin:60px 0;
    @media(min-width:768px){
        padding:0 40px;
    }
    @media(min-width:1200px){
        margin:0;
    }
`;
const HeroContainer  = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    height:auto;
    // border:1px solid red;
    @media(min-width:768px){
        max-height:1500px;
        max-width:2000px;
    }
`;
const HeroContent  = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
`;

const FirstContent  = styled.div`
    // border:1px solid green;
    display:flex;
    justify-content:space-between;
    width:100%;
    @media(min-width:1200px){
        align-items:center;
    }
`;
const SecondContent  = styled.div`
    // border:1px solid orange;
    text-align:center;
    h1{
        font-size:18px;
        @media(min-width:768px){
            font-size:36px;
        }
    }
`;
const ThirdContent  = styled.div`
    // border:1px solid pink;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
`;
const ImageSmall  = styled.img`
    width:170px;
    height:105px;
    @media(min-width:768px){
        width:356px;
        height:220px;
    }
    @media(min-width:1200px){
        position:relative;
        &.bottom-right{
            right:70px;
        }
        &.top-left{
            right:-70px;
        }
    }
`;
const ImageTall  = styled.img`
    height:176px;
    width: 127.42px; 
    @media(min-width:768px){
        height:356px;
        width:257px;
    }
    @media(min-width:1200px){
        z-index:999;
        box-shadow: -4px 4px 9px 1px rgba(0, 0, 0, 0.25);
        &.bottom-left{
            position:relative;
            top:-290px;
        }
        &.top-right{
            position:relative;
            top:290px;
        }
    }
`;

export default HomeHero

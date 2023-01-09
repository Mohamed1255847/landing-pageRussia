import styled from 'styled-components';
import logo from '../img/logo-dob.png';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font-weight: bold;

`;
export const Pargraph = styled.p`
font-size: 1em;
text-align: right;
color: white;

`
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
background-image: url(${logo});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
width: 100%;
height:100vh;
`;


export const InfoBookWarpper = styled.div`
padding:30px;
max-width:70rem;
height:fit-content
`

export const BoxWarpper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
height:100vh;
background:linear-gradient(to bottom ,rgba(0, 0, 0,0.7) , rgba(0, 0, 0, 0.7))


`

export const WhatsAppWarpper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;

`;

export const BlackWarrper = styled.div`
background:linear-gradient(to bottom ,rgba(0, 0, 0,0.9) , rgba(0, 0, 0, 0.9))
display: flex;
justify-content: center;
align-items: center;
width:100%;
cursor:pointer
`



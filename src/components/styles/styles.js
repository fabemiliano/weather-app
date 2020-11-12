import styled from 'styled-components';

export const FlexRowDiv = styled.div`
display: flex;
align-items: ${(props) => props.align};
justify-content: ${(props) => props.justify};
background-image: url(${(props) => props.background});
background-size: cover;
height: ${(props) => props.height};
width: ${(props) => props.width};
margin: ${(props) => props.margin};
`;

export const FlexColumnDiv = styled.div`
display: flex;
flex-direction: column;
align-items: ${(props) => props.align};
justify-content: ${(props) => props.justify};
height: ${(props) => props.height};
width: ${(props) => props.width};
margin: ${(props) => props.margin};
`;

export const MainPage = styled.div`
display: flex;
flex-direction: column;
justify-content: ${(props) => props.justify};
background-image: url(${(props) => props.background});
background-size: cover;
height: 100vh;
width: 100%;
`;

export const Text = styled.p`
color: ${(props) => props.color};
font-size: ${(props) => props.fontSize};
`;

export const Button = styled.button`
color: ${(props) => props.color};
background: ${(props) => props.background};
font-size: ${(props) => props.fontSize};
height: ${(props) => props.height};
width: ${(props) => props.width};
border: none;
border-radius: ${(props) => props.borderRadius}
`;

export const Modal = styled.div``;

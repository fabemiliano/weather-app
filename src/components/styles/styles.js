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

// the styled component can be styled like sass, which make it even easier to use
export const Modal = styled.div`
p {
  color: #fff;
  font-size: 1.5rem;
}
div {
  border: 1px solid #000;
  input {
  background: transparent;
  border: none;
  outline: none;
  }
}
button {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
}


`;

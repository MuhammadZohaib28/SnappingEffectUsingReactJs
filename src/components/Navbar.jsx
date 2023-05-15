import React from "react";
import { styled } from "styled-components";

const Section = styled.nav`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 80rem;
  height: 3.3rem;
  margin-top: 1rem;
  border-radius: 0.4rem;
  background: radial-gradient(
    circle at 5.7% 50%,
    rgba(218, 132, 247, 0.71) 29.5%,
    rgba(248, 193, 119, 0.8) 90.5%
  );
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
    display: flex;
    justifY-content: space-between;
    align-items: center;
`;

const ListItem = styled.li`
    font-size: 1.5rem;
    cursor: pointer;
`;

const List = styled.ul`
list-style: none;
display:flex;
gap: 1.4rem;


`;

const Logo = styled.img`
  height: 5rem;
`;

const Icon = styled.img`
    height: 2rem;
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    // border: 1px solid red;
    gap: 2rem;
    
`;

const Button = styled.button`
    font-size: 1rem;
    // padding: 0rem;
    height: 3.3rem;
    width: inherit;
    background: radial-gradient(circle at -14.3% -17.5%, rgb(245, 168, 168) 4%, rgb(164, 168, 248) 100.2%);
    border: none;
    cursor: pointer;

`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search-icon.png" />
          <Button>Hire Meow</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

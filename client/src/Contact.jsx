import React from "react";
import styled from "styled-components";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 2.5 fr 1fr;
`;

const Text = styled.span`
  grid-column: 2/3;
`

const Titles = styled.p`
  font-family: 'Rowdies', cursive;
  font-size: 2rem;
  color: #CA61E1;
`;

const Info = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  color: white;
`;

const Contact = () => {
  return (
    <ContactGrid>
      <Text>
        <Titles>Phone</Titles>
        <Info>(303) 330-5272</Info>
        <Titles>E-Mail</Titles>
        <Info href="mailto: alexduncan1@outlook.com" target="_blank">alexduncan1@outlook.com</Info><br />
        <Info href="mailto: monkeymedic26@gmail.com" target="_blank">monkeymedic26@gmail.com</Info>
        <Titles>LinkedIn</Titles>
        <Info href="https://www.linkedin.com/in/alexjduncan/" target="_blank">Alex Duncan</Info>
        <Titles>GitHub</Titles>
        <Info href="https://github.com/monkeymedic26" target="_blank">monkeymedic26</Info>
      </Text>
    </ContactGrid>
  )
}

export default Contact;
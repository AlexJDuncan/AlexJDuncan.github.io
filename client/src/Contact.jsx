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

const Info = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
`;

const Contact = () => {
  return (
    <ContactGrid>
      <Text>
        <Titles>Phone</Titles>
        <Info>(303) 330-5272</Info>
        <Titles>E-Mail</Titles>
        <Info>alexduncan1@outlook.com</Info>
        <Info>monkeymedic26@gmail.com</Info>
        <Titles>LinkedIn</Titles>
        <Info>Alex Duncan</Info>
        <Titles>GitHub</Titles>
        <Info>monkeymedic26</Info>
      </Text>
    </ContactGrid>
  )
}

export default Contact;
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

const Contact = () => {
  return (
    <ContactGrid>
      <Text>
        <Titles>Phone</Titles>
        <p>(303) 330-5272</p>
        <Titles>E-Mail</Titles>
        <p>alexduncan1@outlook.com</p>
        <p>monkeymedic26@gmail.com</p>
        <Titles>LinkedIn</Titles>
        <p>Alex Duncan</p>
        <Titles>GitHub</Titles>
        <p>monkeymedic26</p>
      </Text>
    </ContactGrid>
  )
}

export default Contact;
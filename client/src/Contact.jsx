import React from "react";
import styled from "styled-components";

const Titles = styled.p`
  font-family: 'Rowdies', cursive;
  font-size: 2rem;
  color: #CA61E1;
`;

const Contact = () => {
  return (
    <div>
      <Titles>Phone</Titles>
      <p>(303) 330-5272</p>
      <Titles>E-Mail</Titles>
      <p>alexduncan1@outlook.com</p>
      <p>monkeymedic26@gmail.com</p>
      <Titles>GitHub</Titles>
      <p>monkeymedic26</p>
    </div>
  )
}

export default Contact;
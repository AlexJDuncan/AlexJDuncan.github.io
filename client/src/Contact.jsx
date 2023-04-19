import React from "react";

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
import React, { Component } from "react";
import styled from "styled-components";

import gh from "../images/socialicons/gh.png";
import li from "../images/socialicons/li.png";


const Image = styled.img`
  min-height: 2em;
  min-width: 2em;
  filter: grayscale(50%);
`;

const Large = styled.p`
  font-size: large;
`

class Footer extends Component {
  render() {
    return (
      <footer>
        <Large>
          <a href="https://www.linkedin.com/in/heather-foxhill-2b5309a/">
            <Image src={li} />
          </a>&emsp; &copy; Heather Foxhill 2018 &emsp;<a href="https://github.com/HRFoxhill">
            <Image src={gh} />
          </a>
        </Large>
      </footer>
    );
  }
}

export default Footer;

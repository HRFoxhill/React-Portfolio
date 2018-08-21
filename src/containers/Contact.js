import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import linkedin from "../images/contact/linkedin.png";
import github from "../images/contact/github.png";
import gmail from "../images/contact/gmail.png";

const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-left: 0.3em;
  margin-right: 0.3em;
  border-bottom: 2px solid darkred;
  font-size: 200%;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid grey;
`;

const ThumbWrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid grey;
  padding: 1em;
  margin-bottom: 2em;
`;

const Thumbnail = styled.img`
  max-width: 200px;
  max-height: 200px;
  padding: 3em;
  -webkit-filter: grayscale(0.5);
  &:hover {
    -webkit-filter: grayscale(0);
  }
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <br />
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>Contact</Title>
              </Box>
              <Box width={[1, 1 / 3]}>
                <ThumbWrapper className="white">
                  <a href="https://www.linkedin.com/in/heather-foxhill-2b5309a/">
                    <Thumbnail src={linkedin} />
                  </a>
                </ThumbWrapper>
              </Box>
              <Box width={[1, 1 / 3]}>
                <ThumbWrapper className="white">
                  <a href="https://github.com/HRFoxhill">
                    <Thumbnail src={github} /></a>
                </ThumbWrapper>
              </Box>
              <Box width={[1, 1 / 3]}>
                <ThumbWrapper className="white">
                  <a href="mailto:HeatherRFoxhill@gmail.com">
                    <Thumbnail src={gmail} /></a>
                </ThumbWrapper>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default Contact;

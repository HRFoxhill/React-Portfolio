import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import resume from "../images/otherimages/HeatherFoxhillResume.jpg";
// import coverLetter from "../images/otherimages/CoverLetter.jpg"

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

const Thumbnail = styled.img`
  max-height: 1200px;
  max-width: 1200px;
  margin: 1em;
  border: 2px solid grey;
  float: center;
`;

class Resume extends Component {
  render() {
    return (
      <div>
        <br />
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>Experience Summary
                </Title>
              </Box>
              <Box width={[1, 1 / 2, 1]}>
                <Thumbnail src={resume}>
                </Thumbnail>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default Resume;

import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import diploma from "../images/homepage/diploma.png";
import git from "../images/homepage/github.png";
import mail from "../images/homepage/mail.png";

const Outter = styled.div`
  border: 2px solid grey;
  padding-bottom: 2em;
`;

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid grey;
  width: 80%;
  margin: auto;
  padding: 1em;
`;

const Title = styled.h1`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
`;

const SubTitle = styled.h3`
  color: darkred;
  border-bottom: 2px solid black;
  margin-bottom: 1em;
  font-size: 150%;
`;

const List = styled.ul`
  list-style-type: none;
  color: black;
  padding: 0;
  font-size: large;
`;

const Image = styled.img`
  vertical-align: middle;
  height: 5em;
  width: 5em;
  border-radius: 5em;
  padding: 5px;
  border: 2px solid black;
  cursor: pointer;
  :hover{
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

class Banner extends Component {
  render() {
    return (
      <Outter className="black">
        <Flex flexWrap="wrap" className="bold">
          <Box px={2} py={1} width={1}>
            <Title>At A Glance</Title>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <SubTitle>Contact</SubTitle>
              <a href="mailto:HeatherRFoxhill@gmail.com"><Image src={mail}/></a>
              <br /><br />
            </Wrapper>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <SubTitle>Qualifications</SubTitle>
              <Image src={diploma}/>
              <br /><br />
              <List>
                <li>Certificate of Completion in FullStack Web Development (2018)</li>
                <br />
                <li> BA in Business Administration (Junior Level completion)</li>
                <br />
                <li></li>
              </List>
            </Wrapper>
          </Box>
          <Box px={2} py={2} width={[1, 1/3]}>
            <Wrapper className="white">
              <SubTitle>Github</SubTitle>
              <a href="https://github.com/HRFoxhill"><Image src={git}/></a>
              <br /><br />
            </Wrapper>
          </Box>
        </Flex>
      </Outter>
    );
  }
}

export default Banner;

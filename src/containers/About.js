import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Carousel } from 'antd'

import Heather1 from "../images/about/breakthrough.jpg";
import Heather2 from "../images/about/kasperlookoutwindow.jpg";
import Heather3 from "../images/about/hawaii.jpg";

import  winter from "../images/about/walk in the snow.jpg";
import halloween from "../images/about/chaplinHalloween.jpg";
import pups from "../images/about/pupsswim.jpg";
import sushi from "../images/about/seriousSushi.jpg";
import climbing from "../images/about/rockclimbing.jpg";
import xbox from "../images/about/Xboxlogo.png";
// import netflix from "../images/about/.png";

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
  max-height: 300px;
  max-width: 300px;
  margin: 1em;
  border: 2px solid grey;
`

const Section = styled.div`
  color: white;
  width: 80%;
  margin: auto;
`

const Intro = styled.div`
  padding: 1em;
  margin: 2em;
  color: black;
  background-color: white;
  border: 2px solid grey;
`

const Subtitle = styled.h3`
  color: darkred;
  border-bottom: 0.1em solid black;
  font-size: 200%;
`;

const Text = styled.p`
  padding: 1em;
  opacity: 0.8;
  font-size: large;
  margin: auto;
  background-color: lightgrey;
`;

const NBList = styled.ul`
  list-style-type: none;
  text-align: left;
  padding: 0;
`

const Red = styled.span`
  color: darkred;
  font-weight: bold;
`

const CaroImage = styled.img`
  max-width: 600px;
  max-height: 300px;
`

const Spacer = styled.div`
  padding: 2em;
`;
class About extends Component {
  render() {
    return (
      <div>
        <br/>
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>About</Title>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <Thumbnail src={Heather1}></Thumbnail>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <Thumbnail src={Heather2}></Thumbnail>
              </Box>
              <Box width={[1, 1/3]}>
                <Thumbnail src={Heather3}></Thumbnail>
              </Box>
              <Box width={1}>
                <div className="hidechart">
                  <Spacer>
                    <Carousel autoplay>
                       <div><h1>Some Hobbies:</h1></div>
                       <div><CaroImage src={pups}></CaroImage></div>
                       <div><CaroImage src={halloween}></CaroImage></div>
                       <div><CaroImage src={winter}></CaroImage></div>
                       <div><CaroImage src={climbing}></CaroImage></div>
                       {/* <div><CaroImage src={netflix}></CaroImage></div> */}
                       <div><CaroImage src={xbox}></CaroImage></div>
                       <div><CaroImage src={sushi}></CaroImage></div>
                     </Carousel>
                   </Spacer>
                 </div>
              </Box>
              <Box width={1}>
                <Section>
                  <Intro className='white'>
                    <Subtitle>Me, Myself and I</Subtitle>
                    <b><Text>Heather Foxhill</Text></b>
                    <br />
                    <Text>Tag line goes here <br />
                     Insert info about exposure to tech
                     <br /><br />
                      <NBList>
                        <li><Red>Age 8</Red>: </li>
                        <li><Red>Age 16</Red>: </li>
                        <li><Red>Age 20</Red>: Studying Business Administration and Project Management</li>
                        <li><Red>Age 24</Red>: Learning to use a new tech, SAAS and client interaction</li>
                        <li><Red>Age 28</Red>: Exposure to internal product development and UX</li>
                        <li><Red>Age 32</Red>: Moving on - Bootcamp</li>
                       
                      </NBList>
                    </Text>
                    <br />
                    <Text>In short: <Red>I'm an excited learner, early full-stack web developer and avid team player</Red></Text>
                  </Intro>
                </Section>
              </Box>
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Carousel } from 'antd';
import hawaii from "../images/about/hawaii.jpg";
import winter from "../images/about/walk in the snow.jpg";
import pups from "../images/about/pupsswim.jpg";
import potter from "../images/codememes/harrypotterpython.jpg";
import optimist from "../images/codememes/optimistpessimistglass.PNG";
import scare from "../images/codememes/programmersscareeasily.PNG";
import why from "../images/codememes/whencodeworkswhy.PNG";

const Title = styled.h3`
  color: white;/
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
                <Thumbnail src={hawaii}></Thumbnail>
              </Box>
              <Box width={[1, 1/2, 1/3]}>
                <Thumbnail src={pups}></Thumbnail>
              </Box>
              <Box width={[1, 1/3]}>
                <Thumbnail src={winter}></Thumbnail>
              </Box>
              <Box width={1}>
                <div className="hidechart">
                  <Spacer>
                    <Carousel autoplay>
                       <div><h1>Some Hobbies:</h1></div>
                       <div><CaroImage src={potter}></CaroImage></div>
                       <div><CaroImage src={optimist}></CaroImage></div>
                       <div><CaroImage src={scare}></CaroImage></div>
                       <div><CaroImage src={why}></CaroImage></div>
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
                    <Text>"Life isn't about waiting for the storm to pass, it's about learning to dance in the rain!" <br />
                     
                     <br /><br />
                      <NBList>
                        <li><Red>Age 16</Red>: Accepted into private High School for Junior and Senior College Preperatory. Assisted in the founding of 9g Enterprises.</li>
                        <li><Red>Age 17</Red>: Accepted to 6 Universities including Scholarship to Iowa State University ROTC. Continued support work for 9g Enterprises.</li>
                        <li><Red>Age 18</Red>: GAP year to work and completed 6 Month program at the Florida Health Academy. Accepted to McMurry University Fall 2005</li>
                        <li><Red>Age 20</Red>: Studying Business Administration and Project Management at McMurry University. Co-founded SurveyVitals which replaced 9g Enterprises.</li>
                        <li><Red>Age 22</Red>: SurveyVitals has taken off, working 50 hour weeks and have transitioned to full-time Client Services and Sales.</li>
                        <li><Red>Age 28</Red>: Directing Client Services and Sales and gaining exposure to internal product development and UX</li>
                        <li><Red>Age 32</Red>: Decision to make a change away from SurveyVitals after 16 years. Looking for something new and exciting!</li>
                       
                      </NBList>
                    </Text>
                    <br />
                    <Text>In short: <Red>I'm an excited learner, early full-stack web developer and avid team player with ample experience in project management, team leadership and creative learning!</Red></Text>
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

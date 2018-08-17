import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import Card from "../components/Card";


import handlebars from "../images/cardicons/handlebars.png";
import react from "../images/cardicons/react.png";
import node from "../images/cardicons/node.png";
import heroku from "../images/cardicons/heroku.png";
import trello from "../images/cardicons/trello.png";
import aws from "../images/cardicons/aws.png";
import htmlcssjs from "../images/cardicons/htmlcssjs.png";
import js from "../images/cardicons/js.png";
import bulma from "../images/cardicons/bulma-logo.png";
import passport from "../images/cardicons/passport.png";

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

class Projects extends Component {
  render() {
    return (
      <div>
        <br />
        <Wrapper>
          <div className="black">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Title>Projects</Title>
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  project=""
                  images={[react]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  project=""
                  images={[react, node, heroku, trello]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[ ]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[ ]}
                  />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[aws]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  project=""
                  images={[]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  project=""
                  images={[react]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[node]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[js]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title=""
                  summary=""
                  code=""
                  images={[htmlcssjs]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Karma Community App"
                  summary="Handlebars, Node and Express based App using JawsDB and Heroku Deployment."
                  code="https://hrfoxhill.github.io/Project2/index.html"
                  images={[node, heroku, trello, handlebars]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="React-Clicky-Game"
                  summary="Class activity to create a React memory clicky game."
                  code="https://hrfoxhill.github.io/React-Clicky-Game/"
                  images={[node]}
                />
              </Box>
              <Box px={2} py={1} width={[1, 1 / 2, 1 / 3]}>
                <Card
                  title="Artly"
                  summary=""
                  code=""
                  images={[node, react, heroku, trello, passport, bulma]}
                />
              </Box>
              <br />
              <br />
            </Flex>
          </div>
        </Wrapper>
        <br />
      </div>
    );
  }
}

export default Projects;

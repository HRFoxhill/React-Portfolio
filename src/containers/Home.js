import React, { Component } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import ChartComponent from "../components/ChartComponent";
import SkillDisplay from "../components/SkillDisplay";

/* Image Imports */

import htmlcssjs from "../images/skills/frontend/htmlcssjs.png";
import bootstrap from "../images/skills/frontend/bootstrap.png";
import react from "../images/skills/frontend/react.png";
import npm from "../images/skills/frontend/npm.png";
import yarn from "../images/skills/frontend/yarn.png";
import handlebars from "../images/cardicons/handlebars.png";
import node from "../images/skills/frontend/node.png";
import java from "../images/skills/backend/java.png";
import express from "../images/skills/backend/express.png";
import bash from "../images/skills/devops/bash.png";
import vStudio from "../images/skills/devops/vStudio.png";
import git from "../images/skills/devops/git.png";
import adwords from "../images/skills/other/googleadwords.png";
import analytics from "../images/skills/other/googleanalytics.png";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <br />
        <Banner />

        <div className="hidechart">
          <ChartComponent />
        </div>

        <SkillDisplay
          title="DevOps"
          items={[
            { image: bash, subtitle: "Bash", text: "I can do bash me" },
            { image: vStudio, subtitle: "Visual Studio", text: "I can do VS" },
            { image: git, subtitle: "Git", text: "I can do git me" }
          ]}
        />

        <SkillDisplay
          title="Frontend"
          items={[
            {
              image: bootstrap,
              subtitle: "Bootstrap",
              text: "I can utilize bootstrap for ease of formatting and beautiful, simple, webpage front end management"
            },
            { image: react, subtitle: "React", text: "I can utilize react for easy front and backend management, development and clean coding" },
            { image: handlebars, subtitle: "HandleBars", text: "I utilize handlebars to structure code in a meaningful and well documented format for ease of release." },
            {
              image: htmlcssjs,
              subtitle: "HTML/CSS/JS",
              text: "Utilizeing HTML, CSS and JS I can develope simple and complex code in an easily readable format that allows for the intigration of most packages, modules and functionalities."
            },
            {
              image: npm,
              subtitle: "Node Package Manager",
              text: "NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
            },
            {
              image: yarn,
              subtitle: "Yarn",
              text: "I can use Yarn to manage packages and explore new and more viable functionalities for better apps and programs"
            },
            { image: node, subtitle: "Node", text: "As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications." }
          ]}
        />

        <SkillDisplay
          title="Backend"
          items={[
            { image: java, subtitle: "Java", text: "I can haz java" },
            {
              image: express,
              subtitle: "Express",
              text: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
            }
          ]}
        />

        <SkillDisplay
          title="Other"
          items={[
            {
              image: adwords,
              subtitle: "Google AdWords",
              text: "I can utilize graphic display ads, YouTube video ads, text-based search ads, or in-app mobile ads, to reach customers with Google Ads."
            },
            {
              image: analytics,
              subtitle: "Google Analytics",
              text: "I can use Google Analytics to Understand site and app users to better evaluate the performance of marketing, content, products, and more."
            }
          ]}
        />
        <br />
      </Wrapper>
    );
  }
}

export default Home;

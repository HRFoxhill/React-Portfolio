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
import redux from "../images/skills/frontend/redux.png";
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
              text: "I can do Bootstrap me"
            },
            { image: react, subtitle: "React", text: "I can do React me" },
            { image: redux, subtitle: "Redux", text: "I can do Redux me" },
            {
              image: htmlcssjs,
              subtitle: "HTML/CSS/JS",
              text: "I can do WebDev me"
            },
            {
              image: npm,
              subtitle: "Node Package Manager",
              text: "I can do node management me"
            },
            {
              image: yarn,
              subtitle: "Yarn",
              text: "I can do Yarn Package Management me"
            },
            { image: node, subtitle: "Node", text: "I can do a Node me" }
          ]}
        />

        <SkillDisplay
          title="Backend"
          items={[
            { image: java, subtitle: "Java", text: "I can haz java" },
            {
              image: express,
              subtitle: "Express",
              text: "I can do an express"
            }
          ]}
        />

        <SkillDisplay
          title="Other"
          items={[
            {
              image: adwords,
              subtitle: "Google AdWords",
              text: "I can add words"
            },
            {
              image: analytics,
              subtitle: "Google Analytics",
              text: "I can analytic"
            }
          ]}
        />
        <br />
      </Wrapper>
    );
  }
}

export default Home;

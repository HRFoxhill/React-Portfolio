import React, { Component } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import potter from "../images/codememes/harrypotterpython.jpg";
import glass from "../images/codememes/optimistpessimistglass.PNG";
import scare from "../images/codememes/programmersscareeasily.PNG";
import why from "../images/codememes/whencodeworkswhy.PNG";

const Wrapper = styled.div`
  margin-bottom: 50px;
`
const Title = styled.h3`
  color: white;
  padding: 20px;
  margin-bottom: 25px;
  border-bottom: 2px solid darkred;
  font-size: 200%;
  margin-left:100px;
  margin-right:100px;
`;

class CustomCarousel extends Component {
  render() {
    return (
      <Wrapper>
        <Title>The Facts of Life</Title>
        <Carousel autoplay>
          <div>
            <img src={glass}/>
          </div>
          <div>
            <img src={scare}/>
          </div>
          <div>
            <img src={why}/>
          </div>
          <div>
            <img src={potter}/>
          </div>
        </Carousel>
      </Wrapper>
    );
  }
}

export default CustomCarousel;

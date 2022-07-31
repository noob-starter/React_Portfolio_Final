import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {School, College, Graduation} from "../subComponents/TimelineLogo";
import { Github } from "./AllSvgs";


const Container = styled.div`
  background-color: #fae6fa;
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
`;

const Timeline = styled.div`
  background-color: #fec5e5;
  width: 80%;
  height: auto;
  margin-top: 2rem;
  margin-left: 10rem;
  box-shadow: -1px -3px 29px 2px #fe7f9c;
  border-radius: 20px;
  border: 3px solid #ff1694;
  @media (max-width: 500px) {
    width: 60%;
    margin-left: 6rem;
  }
`;


const EducationComponent = () => {
  return (
    <>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        </Container>



        <Timeline>
        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(255, 119, 34)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(250, 90, 199)" }}
            date="2005 - 2017"
            iconStyle={{ background: "rgb(250, 90, 199)", color: "#fff" }}
            icon={<School/>}
          >
            <h3 className="vertical-timeline-element-title">
              <b>SSC</b>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Tip Top Convent, Nagpur.</h4>
            <p>
              92.80%
            </p>&nbsp;&nbsp;
            <Github width={30}/>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "rgb(250, 90, 199)", color: "#fff" }}
            icon={<College/>}
          >
            <h3 className="vertical-timeline-element-title">HSC</h3>
            <h4 className="vertical-timeline-element-subtitle">
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Dharampeth Science College, Nagpur.
            </h4>
            <p>
              89.85%
            </p>&nbsp;&nbsp;
            <Github width={30}/>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(19, 136, 8)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(19, 136, 8)" }}
            date="2019 - Present(2023 Expt.)"
            iconStyle={{ background: "rgb(250, 90, 199)", color: "#fff" }}
            icon={<Graduation/>}
          >
            <h3 className="vertical-timeline-element-title">Graduation</h3>
            <h4 className="vertical-timeline-element-subtitle">
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;RCOEM, Nagpur.
            </h4>
            <p>8.36 CGPA</p>&nbsp;&nbsp;
            <Github width={30}/>
          </VerticalTimelineElement>

        </VerticalTimeline>

        </Timeline>

    </>
  );
};

export default EducationComponent;

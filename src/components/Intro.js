import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"archie"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Welcome to my Digital Space!</div>
          <div className="intro-desc">
            Final-year IT student and aspiring Business Analyst with hands-on experience in ERP systems (Odoo), stakeholder coordination, and Agile project delivery. Currently working as an ICT Business Analyst, with a strong focus on process improvement, data-driven decision-making, and translating business needs into practical solutions.
          </div>
          <a
            href="mailto:archiechadha12@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Let's connect!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;

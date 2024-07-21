import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiVercel,
  SiVisualstudio,
  SiGithub,
  SiMicrosoftteams,
  SiMicrosoftsqlserver,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftoutlook,
  SiWindows11,
  SiXampp,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftword />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoutlook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>

    </Row>
  );
}

export default Toolstack;

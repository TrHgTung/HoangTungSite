import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Clefable from "../../Assets/Clefable.png";
import AchivementCard from "./AchivementCard";

function Achivement() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Thành tựu
            </h1>
            <AchivementCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Clefable} alt="about" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Achivement;

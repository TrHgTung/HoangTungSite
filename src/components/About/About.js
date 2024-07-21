import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Link } from "react-router-dom";

function About() {
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
              Tôi là ai <strong className="purple">Mà ai là tôi</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <Link as={Link} to="/project">Xem qua các dự án cá nhân của tôi</Link>
          </Col>
        </Row>
        <h1 className="project-heading">
          Những <strong className="purple">công nghệ </strong>mà tôi đã sử dụng
        </h1>
        <p>(Laravel, .NET, Git, JS, React, Axios)</p>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Công cụ</strong> tôi đã dùng
        </h1>
        <p>(Apache XAMPP, MySQL, MS SQL Server, Visual Studio, Visual Studio Code, GitHub, Postman, Vercel, MS Teams, Word, Excel, Powerpoint, Outlook, Windows)</p>
        <Toolstack />

        <Github />


      </Container>
    </Container>

  );
}

export default About;

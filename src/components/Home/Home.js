import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  let date = new Date();
  let day = date.toDateString();

  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');

  useEffect(() => {
    const str = day;
    const [word1, word2, word3, word4] = str.split(' ');

    setC(word3);
    setD(word4);

    switch (word2) {
      case 'Jan':
        setB('1');
        break;
      case 'Feb':
        setB('2');
        break;
      case 'Mar':
        setB('3');
        break;
      case 'Apr':
        setB('4');
        break;
      case 'May':
        setB('5');
        break;
      case 'Jun':
        setB('6');
        break;
      case 'Jul':
        setB('7');
        break;
      case 'Aug':
        setB('8');
        break;
      case 'Sep':
        setB('9');
        break;
      case 'Oct':
        setB('10');
        break;
      case 'Nov':
        setB('11');
        break;
      default:
        setB('12');
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Xin chào{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻😄
                </span>
              </h1>

              <div>
                <h1 className="heading-name">
                  <strong className="main-name"> HOÀNG TÙNG </strong>
                  LÀ TUI
                </h1>
                <p className="text-center">
                  Hôm nay là ngày {c} / {b} / {d}
                </p>
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                title="Hello World"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

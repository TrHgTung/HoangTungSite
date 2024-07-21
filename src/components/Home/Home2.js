import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> CÔNG NGHỆ </span> MÀ TUI HAY DÙNG NÈ
            </h1>
            <p className="home-about-body">
              Tui thích việc lập trình phía máy chủ web, mà người ta hay nói là <b className="purple" >đi code web back-end</b> đó
              <br />
              <br />Tui đã 'ăn nằm' với
              <i>
                <b className="purple"> Laravel (PHP)</b>,<b className="purple">  .NET Core (C#) </b> ,<b className="purple">  ReactJS (JS) </b>và cả <b className="purple"> MySQL </b> luôn đó
              </i>
              <br />
              <br />
              Với mấy đứa mà tui đã chơi, thì
              <i>
                <b className="purple"> Laravel</b></i> &nbsp;là chân ái của tui. Ngoài ra tui cũng có thể chơi với <b className="purple"><i>ASP.NET Core</i></b>
              {/* <b className="purple">
                  Blockchain.
                </b> */}

              <br />
              <br />
              Tuy nhiên, tui vẫn không ngừng 'mò mẫm' thằng <b className="purple">ReactJS</b>. Tại khứa này nó giúp tui lấy dữ liệu từ API hiển thị lên giao diện với
              <i>
                <b className="purple">
                  {" "}
                  Axios
                </b>
              </i>
              &nbsp;
              {/* <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" title="Tặng fen cái bông nè" />
            <p style={{ color: 'white' }} className="mt-4"> Đây là tui nè</p>
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Bạn muốn biết thêm về tui?</h1>
            <p>
              <span className="purple">Tương tác với tui qua các nền tảng MXH phía dưới </span>hoặc tiếp tục ở lại trang này để dõi theo về <i><Link as={Link} to="/about">Giới thiệu</Link>, <Link as={Link} to="/project" >Dự án cá nhân</Link>, <Link as={Link} to="/achivement" >Các thành tích</Link> hay <Link as={Link} to="/resume" >CV cá nhân</Link></i> của tui nhé!
            </p>
            <p>
              Mãi iu nà 😘
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TrHgTung"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/trhgtung2002/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@TungSupport"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;

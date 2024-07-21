import React from "react";
import Card from "react-bootstrap/Card";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../App.css";
import Clefable from "../../Assets/Clefable.png";
// import { ImPointRight } from "react-icons/im";

function AchivementCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào, hãy lướt qua những <span className="purple">thành tựu của tui </span>
            nhé
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
          <VerticalTimeline>

            <VerticalTimelineElement
              className=""
              date="31-12-2023"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: 'rgb(34, 35, 36)' }}>Xin chào thế giới</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Hello World</h4>
              <img src={Clefable} width="50px" height="50px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Đạt Giải
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              date="31-12-2023"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: 'rgb(34, 35, 36)' }}>Xin chào thế giới</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Hello World</h4>
              <img src={Clefable} width="50px" height="50px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Hello thẻ p
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AchivementCard;

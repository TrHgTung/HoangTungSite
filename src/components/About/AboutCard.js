import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào các bạn đến từ Việt Nam và từ những đất nước <span className="purple">xinh đẹp </span>khác.
            Tôi là <span className="purple"> Hoàng Tùng.</span>
            <br />
            👨‍🎓 Tôi vừa hoàn thành 4 năm Đại học của mình
            <br />
            với mức CGPA sương sương 3.21 / 4.0 🫣
            <br />
            <br />
            Và bây giờ tôi vẫn đang tìm cho mình một công việc
            <br />
            Vì thế nếu bạn là nhà tuyển dụng, đang tìm kiếm một ứng viên biết về
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Laravel (PHP)
            </li>
            <li className="about-activity">
              <ImPointRight />  .NET Core (C#)
            </li>
            <li className="about-activity">
              <ImPointRight /> Code API / back-end web
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            <br />
            Thì xin hãy 'ghim' tôi 🥺
          </p>

          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "No pain, no gain!"{" "}
          </p>
          <footer className="">💪</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

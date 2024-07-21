import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Lapras from "../../Assets/Projects/Lapras.jpg";
import ECommerce from "../../Assets/Projects/ECommerce.png";
import Snorlax from "../../Assets/Projects/Snorlax.jpg";
import Dragonite from "../../Assets/Projects/Dragonite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Các <strong className="purple">dự án cá nhân </strong> của tôi
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là những dự án mà tôi tự làm, bắt đầu từ việc <br /> tự lên kế hoạch 👉 tự tìm hiểu công nghệ 👉 tự thiết kế CSDL 👉 tự code 👉 tự test 👉 tự fix 👉 tự push lên Git luôn.
        </p>
        <p style={{ color: "white" }}>(Tài liệu có trong file Readme của các Repository)</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lapras}
              isBlog={false}
              title="Lapras"
              description="Đây là một hệ thống vận hành theo nghiệp vụ Xe khách dịch vụ (dành cho cả Khách hàng và Nhà xe) - SSR với Laravel. Các bạn có thể tìm hiểu thêm với file Readme có trong Source nhen"
              ghLink="https://github.com/TrHgTung/Lapras"
              demoLink="https://youtu.be/0WWv82OsUTw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snorlax}
              isBlog={false}
              title="Snorlax"
              description="Đây là một ứng dụng Lời nhắc cơ bản với Laravel và ReactJS (kiến trúc phân tán). Các bạn có thể tìm hiểu thêm với file Readme có trong Source nhen"
              ghLink="https://github.com/TrHgTung/Snorlax"
              demoLink="https://youtu.be/ENyF0MQx-78"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dragonite}
              isBlog={false}
              title="Dragonite"
              description="Đây là một ứng dụng cho phép gửi thư điện tử đồng loạt với Laravel và ReactJS"
              ghLink="https://github.com/TrHgTung/Dragonite"
              demoLink="https://youtu.be/JVPUO5Vcomo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="Website Bán sách (E-Commerce) với Laravel 8 (MVC)"
              description="Đây là một hệ thống website cho phép khách hàng đến tìm chọn sách, đặt mua sách, thanh toán trực tuyến và cho phép quản trị viên có thể quản lý các tài nguyên của hệ thống."
              ghLink="https://github.com/TrHgTung/ShopBanHangLaravel"
              demoLink="https://youtu.be/kbTeTGmChfo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="Website Bán sách (E-Commerce) với ASP .NET Core 6 (MVC)"
              description="Đây là một hệ thống website cho phép khách hàng đến tìm chọn sách, đặt mua sách và cho phép quản trị viên có thể quản lý các tài nguyên của hệ thống"
              ghLink="https://github.com/TrHgTung/WebApp01"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dragonite}
              isBlog={false}
              title="API Gửi E-mail cơ bản với .NET Core 6 (API)"
              description="Đây là một API nhỏ có chức năng gửi e-mail đính kèm tệp có sẵn trong server với .NET Core 6 (Bài kiểm tra nhanh năng lực khi còn thực tập ở Trung tâm CNTT VNPT)"
              ghLink="https://github.com/TrHgTung/MailAPI"
              demoLink="https://youtu.be/roz1dE0bbyI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

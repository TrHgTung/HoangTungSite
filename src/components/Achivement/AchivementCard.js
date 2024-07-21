import React from "react";
import Card from "react-bootstrap/Card";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../App.css";
import Hoa from "../../Assets/Achivement/Hoa.png";
import Ly from "../../Assets/Achivement/Ly.jpg";
import Covid from "../../Assets/Achivement/Covid.jpg";
import TNC3 from "../../Assets/Achivement/TNC3.png";
import Youtuber from "../../Assets/Achivement/Youtuber.png";
import VNDTeam from "../../Assets/Achivement/VNDTeam.jpg";
import HBKKHT from "../../Assets/Achivement/mail_hb.png";
import VNPT from "../../Assets/Achivement/VNPT.jpg";
import TNDH from "../../Assets/Achivement/TNDH_1.jpg";

function AchivementCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào, hãy xem qua những <span className="purple">thành tựu của tui </span>
            qua cây ký ức nhé
          </p>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 21 tháng 01 năm 2019 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-title" style={{ color: 'rgb(34, 35, 36)' }}>Đạt Giải Nhì - Cuộc thi Thực hành Hóa học cấp Trường</h5>
              <img src={Hoa} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Trường THPT Nguyễn Tất Thành (Q6 - TPHCM)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 22 tháng 10 năm 2019 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Đạt Giải Khuyến khích - Cuộc thi Thực hành Vật lý cấp Trường</h5>
              <img src={Ly} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Trường THPT Nguyễn Tất Thành (Q6 - TPHCM)
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="'Kỳ nghỉ Tết' dài 3 tháng (Tháng 2/2020 - 5/2020) &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Mùa dịch Covid-19</h5>
              <img src={Covid} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Học online nè he 😊
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Tháng 7 & Tháng 8/2020 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Kết thúc năm lớp 12 & chuẩn bị cho kỳ thi THPT Quốc Gia 2020</h5>
              <img src={TNC3} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Một kỳ tốt nghiệp và kỳ thi THPT Quốc Gia chưa từng có tiền lệ
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 11 tháng 3 năm 2023 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Giao lưu với Youtuber nè he</h5>
              <img src={Youtuber} width="225px" height="145px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Check it out 🤩: <a href="https://youtu.be/aq8ldYqXmFs?t=557" target="_blank">https://youtu.be/aq8ldYqXmFs?t=557</a>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 23 tháng 9 năm 2023 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Đánh giải được sương sương hạng Nhì với team nè he</h5>
              <img src={VNDTeam} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Check it out 🤩: <a href="https://youtu.be/e953DtV2YvY?t=23412" target="_blank">https://youtu.be/e953DtV2YvY?t=23412</a>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 26 tháng 9 năm 2023 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Học kỳ 2 - 2022/2023</h5>
              <img src={HBKKHT} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Học bổng Khuyến khích học tập
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 20 tháng 4 năm 2024 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Thực tập nghề nghiệp</h5>
              <img src={VNPT} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Hoàn thành Báo cáo Thực tập tại Trung tâm CNTT - VNPT
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="custom-timeline-element"
              date="Ngày 11 tháng 7 năm 2024 &nbsp;"
              iconStyle={{ background: "pink", color: "#fff" }}
            >
              <h5 className="vertical-timeline-element-subtitle" style={{ color: 'rgb(34, 35, 36)' }}>Tạm gác lại việc ngồi trên giảng đường</h5>
              <img src={TNDH} width="200px" height="125px" />
              <p className="vertical-timeline-element-desc success" style={{ color: 'rgb(34, 35, 36)' }}>
                Hoàn thành 4 năm theo học tại Trường Đại học Sư Phạm TP. Hồ Chí Minh ✨✨✨
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AchivementCard;

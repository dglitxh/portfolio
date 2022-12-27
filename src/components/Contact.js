import contImg from "./utils/svgs/contact.svg";
import { Row, Col } from "antd";
const Contact = () => {
  return (
    <div id="contact" className="container">
      <h2 className="mb-4"> Contact. </h2>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 0 }}
        >
          <div>
            <img
              src={contImg}
              className="img-fluid my-3"
              alt="svg"
              loading="lazy"
            />
          </div>
        </Col>
        <Col sm={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <div className="contacts">
            <h3 classname="mt-3">You can always contact me on: </h3>
            <br></br>
            <h3 classname="my-5">
              <a
                href="mailto:dzzy104@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-primary mx-2"
              >
                email
              </a>
              <br></br>

              <a
                href="http://github.com/dglitxh"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-primary mx-2"
              >
                github
              </a>
              <br></br>
              <a
                href="http://codewars.com/Ydglitch"
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-primary mx-2"
              >
                codewars
              </a>
            </h3>
          </div>
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 0 }}
          lg={{ span: 12 }}
        >
          <div className="">
            <img
              src={contImg}
              className="img-fluid my-3"
              alt="svg"
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;

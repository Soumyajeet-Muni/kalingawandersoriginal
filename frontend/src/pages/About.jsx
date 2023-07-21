import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import sdimg from "../assets/images/sd.jpg";
import somimg from "../assets/images/som.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <section>
      <Container>
      <h2 className=" note hightlight mb-5 fw-semibold ">
"Crafting Digital Masterpieces: Meet Our Web Development Team!"</h2>
        <Row>
          <Col lg="5">
            <div class="grid-child purple  container mx-auto ">
              <div className="card" >
                <img className="card-img-top " src={sdimg} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Subham Dikshit</h4>
                  <p className="card-text">subhamdikshit007@gmail.com</p>
                  <a href="https://www.linkedin.com/in/subham-dikshit-b96552253" target="blank" class="btn btn-lg primary__btn">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="2"> </Col>

          <Col lg="5">
            <div class="grid-child green  container mx-auto">
              <div className="card" >
                <img className="card-img-top" src={somimg} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Soumyajeet Muni</h4>
                  <p className="card-text">soumyajeetmuni@gmail.com</p>
                  <a
                    href="https://www.linkedin.com/in/soumyajeet-muni-8952a7232/"
                    target="blank"
                    class="btn btn-lg primary__btn"
                  >
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

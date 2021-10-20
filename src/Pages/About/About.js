import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import img from "./images/national-cancer-institute-KrsoedfRAf4-unsplash.jpg";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the Healthfirst Medical Center best known for?
              </Accordion.Header>
              <Accordion.Body>
                Healthfirst Medical Center has pioneered many medical
                breakthroughs, including coronary artery bypass surgery and the
                first face transplant in the United States. U.S. News & World
                Report consistently names Healthfirst Medical Center as one of
                the nation's best hospitals in its annual “America's Best
                Hospitals” survey.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Which is better Mayo Clinic or Healthfirst Medical Center?
              </Accordion.Header>
              <Accordion.Body>
                For the third consecutive year, the Mayo Clinic in Rochester,
                MN, claimed the No. 1 spot in the annual honor roll of best
                hospitals published by US News and World Report. The Cleveland
                Clinic in Ohio holds the No. ... 3 spot, and Massachusetts
                General Hospital in Boston holds the No.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What does Healthfirst Medical Center specialize?
              </Accordion.Header>
              <Accordion.Body>
                Twelve Healthfirst Medical Center programs placed in the top
                five nationally – cancer; cardiology/heart surgery;
                diabetes/endocrinology; gastroenterology/GI surgery; geriatrics;
                gynecology; nephrology; neurology/neurosurgery; orthopedics;
                pulmonology; rheumatology; and urology
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How prestigious is the Healthfirst Medical Center?
              </Accordion.Header>
              <Accordion.Body>
                The Mayo Clinic and the Healthfirst Medical Center have again
                secured the top and runner-up spots of the U.S. News & World
                Report's annual ranking of the country's best hospitals. Now in
                its 32nd year, the rankings evaluated more than 4,750 hospitals
                across 15 medical specialties or overall
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Do you need a referral to Healthfirst Medical Center?
              </Accordion.Header>
              <Accordion.Body>
                Healthfirst Medical Center does not require a referral, however
                your insurance company might require one to provide coverage for
                your visit or procedure. For more details, please review our
                billing checklist.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          {" "}
          <img src={img} alt="" />{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default About;

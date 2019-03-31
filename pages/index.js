import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import { Button, Container, Row, Col } from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Development Student </h2>
                        <div className="hero-section-content-intro">
                          This is my Portfolio Page!
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to <strong>Daniel Hernqvist's</strong> portfolio page!
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h2>Here is some more information!</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;

import React from "react";
import Typed from 'react-typed';

import BaseLayout from "../components/layouts/BaseLayout";

import { Button, Container, Row, Col } from "reactstrap";

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech Lover', 'Nerd', 'Team-Player', "Lo's Dad"];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 5000);
  }
  
  render() {

    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

    return (
      // Keep this? If I want the background-color to change when flipping the card.
      // <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType="index">
      
      <BaseLayout className='cover' {...this.props.auth} headerType="index" title="Daniel Hernqvist - Portfolio">
        <div className="main-section">
          {/* <div className="background-image">
            <img src="/static/images/background-index.png" alt="Background picture of the home screen" />
          </div> */}

          <Container>
            <Row>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {/* { isAuthenticated && <span><b>{user.name}</b></span> } */}
                    Welcome to <strong>Daniel Hernqvist's</strong> portfolio page!
                  </h1>
                </div>

                <Typed
                  loop
                  typeSpeed={50}
                  backSpeed={30}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <h2>Here is some more information!</h2>
                </div>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/daniel-hernqvist-0b17a7181" target="_blank">
                        <span className="fa-stack fa-lg faIcon">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/dsan86" target="_blank">
                        <span className="fa-stack fa-lg faIcon">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/hernqvistdaniel" target="_blank">
                        <span className="fa-stack fa-lg faIcon">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-github fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                  </ul> 
                </div>
              </Col>

              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2 className="hejsan"> Full Stack Web Development Student </h2>
                        <div className="hero-section-content-intro">
                          This is my Portfolio Page!
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/spavatarsmal-no2.jpg"
                        alt="Animated avatar of the author to the page"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2 className="hejsan"> Always learning new stuff! </h2>
                        <div className="hero-section-content-intro">
                          Hej jag heter Johanna
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/sepiaavatar.jpg"
                        alt="Animated avatar of the author to the page in sepia colors"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
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

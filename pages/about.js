import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col} from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <BaseLayout title="Daniel Hernqvist - About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, welcome</h1>
                <h4 className="subtitle fadein">to about page</h4>
                <p className="subsubTitle fadein">description about me</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is daniel</p>
                <p>I am studying full stack web dev</p>
                <p>courses we have read are: react, angular etc..</p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
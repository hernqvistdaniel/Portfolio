import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';


class Cv extends React.Component {
  render() {
    return (
      <BaseLayout title="Daniel Hernqvist - My CV" {...this.props.auth}>
        <BasePage title="CV" className="cv-page">
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <div className="cv-title">
                <a download="dhernqvist_cv.pdf" className="btn btn-success" href="/static/images/danielhernqvistcv.pdf">Download!</a>
              </div>
              <iframe style={{width: '100%', height: '1100px'}} src="/static/images/danielhernqvistcv.pdf">

              </iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv;
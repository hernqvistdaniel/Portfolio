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
                <h1 className="title fadein">Welcome to</h1>
                <h4 className="subtitle fadein">the about page</h4>
                <p className="subsubTitle fadein">Here you can find more information about me!</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p><strong>My name is Daniel Hernqvist!</strong></p>
                <p>I am currently studying Web Development at Chas Academy in Stockholm.</p>
                <p>For the last years I have been working as a Chef and Head-Chef at various locations in Stockholm.
                  But two years ago I had a daughter that made me rethink my work-situation. Trying to get away from night-shifts I wanted to pick up my biggest hobby. Computing!</p>
                <p>I've used computers since I was very young building servers and modding games.</p>
                <p>As a person I'm very interested in Tech and always thirsty for more information!</p>
                <p>In school, we have been learning Full-Stack Development using different libraries, frameworks and stacks!
                  HTML/CSS, JavaScript and PHP. Laravel, Angular, React as main FWs. On the backend
                  we have been using Node, Express to cope with SQL.
                </p>
                <p>Other techniques including Agile workflow, Git, ES6, UX/UI, Design, A11y, Docker, MEAN, MERN.</p>
                <p>If you have any questions feel free to contact me using anything you like on the Home-page!
                  Nice to have you here!
                </p>
                
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Container, Row, Col } from "reactstrap";
import { Link } from "../routes";

import { getBlogs } from "../actions";
import { shortenText } from "../helpers/utils";

import moment from "moment";

class Blogs extends React.Component {
  static async getInitialProps({ req }) {
    let blogs = [];

    try {
      blogs = await getBlogs(req);
    } catch (err) {
      console.error(err);
    }

    return { blogs };
  }

  renderBlogs = blogs =>
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">{shortenText(blog.title, 48)}</h2>
            <h3 className="post-subtitle">{shortenText(blog.subtitle, 124)}</h3>
          </a>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#"> {blog.author} </a>
          {moment(blog.createdAt).format("LLLL")}
        </p>
      </div>
    ));

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        {...this.props.auth}
        headerType={"landing"}
        className="blog-listing-page"
        title="Daniel Hernqvist - My Blogs"
      >
        <div
          className="masthead"
          style={{
            backgroundImage: "url('/static/images/FullSizeRender-min.jpg')"
          }}
        >
          <div className="overlay" />
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Latest Blogposts</h1>
                  <span className="subheading">
                    Programming, Web-Development, Tech, Hobbies...
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {this.renderBlogs(blogs)}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">
                  Older Posts &rarr;
                </a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                  <li className="list-inline-item">
                      <a
                        href="mailto:dhernqvist@gmail.com"
                        target="_blank"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fas fa-envelope fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/daniel-hernqvist-0b17a7181"
                        target="_blank"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/dsan86" target="_blank">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/hernqvistdaniel"
                        target="_blank"
                      >
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x" />
                          <i className="fab fa-github fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">
                    Copyright &copy; Daniel Hernqvist
                  </p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;

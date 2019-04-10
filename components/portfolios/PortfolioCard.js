import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { portfolio, children } = this.props;

    return (
      <span>
        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header">
            {portfolio.position}
          </CardHeader>
          <CardBody>
            <p className="portfolio-card-city"> {portfolio.location} </p>
            <CardTitle className="portfolio-card-title">
              {portfolio.title}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {portfolio.description}
            </CardText>
            <div className="readMore">{children}</div>
          </CardBody>
        </Card>
      </span>
    );
  }
}

import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import axios from 'axios';


class Secret extends React.Component {

  static getInitialProps() {
    const superSecretValue = 'Super Secret Value';

    return { superSecretValue };
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/secret');
    const secretData = res.data;
    this.setState =({
      secretData
    });
  }

  render() {

    const { superSecretValue } = this.props;

    console.log(this.state);
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Secret!!</h1>
          <p> Secret Content!</p>
          <h2>{ superSecretValue }</h2>
        </BasePage>
      </BaseLayout>
      )
  }
}

export default withAuth(Secret);
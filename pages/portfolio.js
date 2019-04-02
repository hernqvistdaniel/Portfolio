import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';
import BasePage from '../components/BasePage';



class Portfolio extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>im portfolio!</h1>
          <h2>{this.props.router.query.id}</h2>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio);
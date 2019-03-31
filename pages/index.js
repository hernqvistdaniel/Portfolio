import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';


class Index extends React.Component {

  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch(err) {
      console.error(err);
    }

    return {
      initialData:
        [1, 2, 3, 4],
        userData
    };
  }

  constructor() {
    super();

    this.state = {
      title: 'i am index page'
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('CDM')
  }

  componentDidUpdate() {
    console.log('CDU')
  }

  componentWillUnmount() {
    console.log('CWU');
  }

  updateTitle() {
    this.setState({
      title: 'i am updated'
    });
  }

  render() {
    const {userData} = this.props;
    console.log('render');

    return (
      <BaseLayout>
        <h1>index!</h1>
        <h2>{userData.title}</h2>
        <h2>{this.state.title}</h2>
        <button onClick={() => this.updateTitle()}>Change title</button>
      </BaseLayout>
    )
  }
}

export default Index;
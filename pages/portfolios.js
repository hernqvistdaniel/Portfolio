import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';


class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch(err) {
      console.error(err);
    }

    return {
      posts: posts.splice(0, 10)
    };
  }

  renderPosts() {
    const {posts} = this.props;

    return posts.map((post) => {
      return (
        <li>
          <Link as={`/portfolio/${post.id}`} href={`/portfolio?id=${post.id}`}>
          <a style={{'fontSize': '20px'}}>{post.title}</a>
          </Link>
        </li>
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <BaseLayout>
        <h1>portfolio!</h1>
        <ul>
          {this.renderPosts()}
        </ul>
      </BaseLayout>
    )
  }
}

export default Portfolios;
import React from 'react';


export default function (Component) {
  return class withAuth extends React.Component {

      alertMessage() {
        alert('message!');
      }

      render() {
        return <Component {...this.props} />
      }
  }
}
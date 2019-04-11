import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';


const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user } = props;
  const headerType = props.headerType || 'default';

  return (
    <React.Fragment>
      <Head>
        <title>Daniel Hernqvist</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      </Head>
      <div className="layout-container">
        <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            { children }
          </div> 
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;
import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical
  } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Daniel Hernqvist, I am currently studying Full-Stack Web Development in Stockholm, this is my Portfolio where you can see my latest projects and also read my latest updates!" />
        <meta
          name="keywords"
          content="daniel hernqvist portfolio, hernqvist blog, hernqvist web developer, hernqvist programmer, hernqvist stockholm"
        />
        <meta property="og:title" content="Daniel Hernqvist - Full-Stack Web Developer, Student, Tech, Programmer" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="My name is Daniel Hernqvist, I am currently studying Full-Stack Web Development in Stockholm" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}
        <link rel="icon" type="image/ico" href="/static/resources/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;

import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dhern.eu.auth0.com',
      clientID: 'JfkjCC64plB6NYxfZ8CtB8ppjjNd5q9D',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {

    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    })
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    // this.accessToken = authResult.accessToken;

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove('user', authResult.idTokenPayload);
    Cookies.remove('jwt', authResult.idToken);
    Cookies.remove('expiresAt', expiresAt);
  }
}

const auth0Client = new Auth0();

export default auth0Client;
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dhern.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'JfkjCC64plB6NYxfZ8CtB8ppjjNd5q9D',
  issuer: 'https://dhern.eu.auth0.com/',
  algorithms: ['RS256']
})
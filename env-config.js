const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://dhernqvist.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://dhernqvist.herokuapp.com',
  'process.env.CLIENT_ID': 'JfkjCC64plB6NYxfZ8CtB8ppjjNd5q9D'
}
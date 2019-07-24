/*
 * @file: index.js
 * @description: It Contain environment variables.
 * @date: 04.07.2018
 * @author: Jasdeep Singh
 */

 const local = {
     apiUrl: 'http://localhost:3002/api/v1',
     socketUrl: 'http://localhost:3002'
 };
 const production = {
    apiUrl: 'https://ba49e75e.ngrok.io/api/v1',
    socketUrl: 'https://ba49e75e.ngrok.io'
}

if (process.env.NODE_ENV === 'production') {
    module.exports = production;
  } else {
    module.exports = local;
  }
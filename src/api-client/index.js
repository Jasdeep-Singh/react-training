/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: Jasdeep Singh
 */
import axios from 'axios';
import querystring from 'querystring';

var config = {
  headers: { 'Content-Type': 'application/json' }
};

class ApiClient {
  static post(url, params) {
    return new Promise(function(fulfill, reject) {
      axios
        .post(url, JSON.stringify(params), config)

        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static put(url, params) {
    return new Promise(function(fulfill, reject) {
      axios
        .put(url, JSON.stringify(params), config)
        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url, params) {
    let query = querystring.stringify(params);
    url = query ? `${url}?${query}` : url;
    return new Promise(function(fulfill, reject) {
      axios
        .get(url, config)

        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static delete(url) {
    return new Promise(function(fulfill, reject) {
      axios
        .delete(url, config)
        .then(function(response) {
          fulfill(response.data);
        })
        .catch(function(error) {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

}

export default ApiClient;

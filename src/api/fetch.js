// 兼容包
require('babel-polyfill');
require('es6-promise').polyfill();

const Fetch = (url, requestType, data, resolve, reject) => {
  let objData = {};
  if (requestType === 'POST') {
    objData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } else {
    url = url + `?${data}`,
    objData = {
      method: 'GET',
    };
  }

  fetch(url, objData)
    .then((response) => response.json())
    .then((result) => {
      if (!result.error) {
        console.log(result);
        resolve(result);
      } else {
        reject();
      }
    })
    .catch((ex) => {
      console.log('parsing failed', ex);
      reject();
    });
};

export default Fetch;

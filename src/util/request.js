//TODO: 这里写网络请求函数
const url_hear = 'http://110.42.175.148/library-0.0.1-SNAPSHOT'

async function request(url = '', method = 'GET', data = {}) {
    url = url_hear + url;
    var response;
    switch(method.toLowerCase()){
        case 'get':
            response = await fetch(url, {
                method: 'Get', 
              });
            break;
        case 'post':
            response = await fetch(url, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            break;
        case 'delete':
            response = await fetch(url, {
                method: 'DELETE', 
              });
            break;
        case 'put':
            response = await fetch(url, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            break;
        
    }
    console.log(response)
    return response.json();
  }

export default request;
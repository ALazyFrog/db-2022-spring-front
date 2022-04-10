//TODO: 这里写网络请求函数
const url_hear = 'http://110.42.175.148/library-0.0.1-SNAPSHOT'
var response_json

async function request(url = '', method = 'GET', data = {}) {
    var final_url = url_hear + url;
    var header,response_data;
    //除了登录，都需要token
    if(url != "/token") {
        header = {'Content-Type': 'application/json',"Authorization":localStorage.getItem('token')}
    }else{
        header = {'Content-Type': 'application/json'}
    }
    console.log(header)
    switch(method.toLowerCase()){
        case 'get':
            fetch(final_url, {
                method: 'Get', 
              }).then(response=>{response_data = response.json();});
            break;
        case 'post':            
            fetch(final_url, {
                method: 'POST', 
                headers: header,
                body: JSON.stringify(data)
              }).then(response=>{response_data = response.json();});
            break;
        case 'delete':
            fetch(final_url, {
                method: 'DELETE', 
              }).then(response=>{response_data = response.json();});
            break;
        case 'put':
            fetch(final_url, {
                method: 'PUT', 
                headers: header,
                body: JSON.stringify(data)
              }).then(response=>{response_data = response.json();});
            break;
    }
    return response_data
}


export default request;
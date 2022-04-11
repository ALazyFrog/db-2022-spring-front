//TODO: 这里写网络请求函数
const url_hear = 'http://110.42.175.148/library-0.0.1-SNAPSHOT'

async function request(url = '', method = 'GET', data = {}) {
    var final_url = url_hear + url;
    var header,response;
    //确定header
    if(url == "/token") {
        header = {'Content-Type': 'application/json'}
    }else if(method.toLowerCase() == 'post' || method.toLowerCase() == 'put'){
        header = {'Content-Type': 'application/json',"Authorization":localStorage.getItem('token')}
    }
    else{
        header = {"Authorization":localStorage.getItem('token')}
    }
    console.log(header)
    
    switch(method.toLowerCase()){
        case 'get':
            response = await fetch(final_url, {
                method: 'Get', 
                headers: header,
              });
            break;
        case 'post':            
            response = await fetch(final_url, {
                method: 'POST', 
                headers: header,
                body: JSON.stringify(data)
              });
              console.log(JSON.stringify(data))
            break;
        case 'delete':
            response = fetch(final_url, {
                method: 'DELETE',
                headers: header, 
              });
            break;
        case 'put':
            response = fetch(final_url, {
                method: 'PUT', 
                headers: header,
                body: JSON.stringify(data)
              });
            break;
    }
    return response.json()
}


export default request;
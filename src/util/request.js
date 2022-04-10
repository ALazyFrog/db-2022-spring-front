//TODO: 这里写网络请求函数
const url_hear = 'http://110.42.175.148/library-0.0.1-SNAPSHOT'

async function request(url = '', method = 'GET', data = {}) {
    var final_url = url_hear + url;
    var header,response;
    //除了登录，都需要token
    if(url != "/token") {
        header = {'Content-Type': 'application/json',"Authorization":localStorage.getItem('token')}
    }else{
        header = {'Content-Type': 'application/json'}
    }
    console.log(header)
    switch(method.toLowerCase()){
        case 'get':
            await fetch(final_url, {
                method: 'Get', 
              });
            break;
        case 'post':            
            response = await fetch(final_url, {
                method: 'POST', 
                headers: header,
                body: JSON.stringify(data)
              });
            break;
        case 'delete':
            fetch(final_url, {
                method: 'DELETE', 
              });
            break;
        case 'put':
            fetch(final_url, {
                method: 'PUT', 
                headers: header,
                body: JSON.stringify(data)
              });
            break;
    }
    return response.json()
}


export default request;
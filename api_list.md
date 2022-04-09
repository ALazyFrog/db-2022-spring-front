# 图书管理系统

[toc]

## API list

前置url省略，请在util类中定义全局url，方便更改。若有data需要传输，Content-Type统一为application/json。如果获取的code非0，说明后端报错，请将message反馈给用户。

我们规定，每一个管理员都可以注册新的管理员，刚开始只有一个初始管理员。

### POST /token

登录，获取token，除此之外所有请求都需要header中有Authorization为token值。

request body

```json
{
    "aid": "123",
    "password": "admin"
}
```

response body

```json
{
    "code": "0",
    "message": "success",
    "data": [
        {
            "token": "asdfghjklqwertyuiopxcvbnm"
        }
    ]
}
```

### POST /admin

新建管理员。

request body

```json
{
    "aid": "134",
    "name": "admin",
    "adminEmail": "123@zju.edu.cn",
    "password": "admin"
}
```

response body

```json
{
    "code": "0",
    "message": "success"
}
```

### POST /card

新建借书证。cid主键自增。

request body

```json
{
    "name": "user",
    "apartment": "计算机学院",
    "type": "学生"
}
```

response body

```json
{
    "code": "0",
    "message": "success"
}
```

### GET /card/123

返回此卡信息。

response body

```json
{
    "code": "0",
    "message": "success",
    "data": [
        {
            "cid": 123,
            "name": "user",
            "apartment": "计算机学院",
            "type": "学生"
        }
    ]
}
```

### DELETE /card/123

删除cid为123的借书证。

response body

```json
{
    "code": "0",
    "message": "success"
}
```

### POST /book

新增书本入库，单本和批量都使用数组形式。bid使用主键自增。

request body

```json
{
    "book":[
        {
            "category": "计算机",
            "title": "深入理解计算机系统",
            "press": "机械工业出版社",
            "year": "2012",
            "author": "不知道",
            "price": 65.00,
            "total": 2,
            "stock": 1
        },
        {
            "category": "计算机",
            "title": "算法导论",
            "press": "机械工业出版社",
            "year": "2012",
            "author": "不知道",
            "price": 65.00,
            "total": 2,
            "stock": 1
        }
    ]
}
```

response body

```json
{
    "code": "0",
    "message": "success"
}
```

### GET /book?title=算法导论&year=2012

多条件查询图书

response body

```json
{
    "code": "0",
    "message": "success",
    "data": [
        {
            "bid": 1,
            "category": "计算机",
            "title": "算法导论",
            "press": "机械工业出版社",
            "year": "2012",
            "author": "不知道",
            "price": 65.00,
            "total": 2,
            "stock": 1
        }
    ]
}
```

### GET /borrow/123

查询卡号123借的书。

response body

```json
{
    "code": "0",
    "message": "success",
    "data": [
        {
            "bid": 1,
            "category": "计算机",
            "title": "算法导论",
            "press": "机械工业出版社",
            "year": "2012",
            "author": "不知道",
            "price": 65.00,
            "total": 2,
            "stock": 1
        }
    ]
}
```

### POST /borrow

借书。借书时间由后端生成。

request body

```json
{
    "cid": 123,
    "bid": 1,
    "aid": "123"
}
```



response body

```json
{
    "code": "0",
    "message": "success"
}
```

### PUT /borrow/123/1

卡号123归还书号1。还书时间由后端生成。

response body

```json
{
    "code": "0",
    "message": "success"
}
```


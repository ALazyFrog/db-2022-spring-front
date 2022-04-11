import './ImportPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import request from '../../util/request';

const { TextArea } = Input;
const onChange = e => {
    console.log('Change:', e.target.value);
};


function ImportPage() {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [press, setPress] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState(0);
    const [price, setPrice] = useState("");
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
    return (
        <div>
            <Header keyValue="import" />
            <div className='border'>
                <Input className='InputBox' addonBefore="category" style={{ width: '90%' }} placeholder="category" onChange={(event) => { setCategory(event.target.value) }} />
                <Input className='InputBox' addonBefore='title   ' style={{ width: '90%' }} placeholder="title" onChange={(event) => { setTitle(event.target.value) }} />
                <Input className='InputBox' addonBefore='press   ' style={{ width: '90%' }} placeholder="press" onChange={(event) => { setPress(event.target.value) }} />
                <Input className='InputBox' addonBefore='year    ' style={{ width: '90%' }} placeholder="year" onChange={(event) => { setYear(parseInt(event.target.value, 10)) }} />
                <Input className='InputBox' addonBefore='author  ' style={{ width: '90%' }} placeholder="author" onChange={(event) => { setAuthor(event.target.value) }} />
                <Input className='InputBox' addonBefore='price   ' style={{ width: '90%' }} placeholder="price" onChange={(event) => { setPrice(parseFloat(event.target.value)) }} />
                <Input className='InputBox' addonBefore='number  ' style={{ width: '90%' }} placeholder="number" onChange={(event) => { setNumber(parseInt(event.target.value, 10)) }} />

                <Button className='Button1' type="primary" onClick={() => {
                    let data = [{
                        category: category,
                        title: title,
                        press: press,
                        year: year,
                        author: author,
                        price: price,
                        total: number,
                        stock: number
                    }]
                    request("/book", "POST", data).then(
                        (response) => {
                            console.log(response);
                            alert(response.message)
                        }
                    )
                }}>
                    ADD
                </Button>
            </div>
            <div className='border'>
                <TextArea rows={4} placeholder="Input string in json format" />
                <Button className='Button1' type="primary" onClick={
                    () => {
                        let json_data = '[{\"category\": \"计算机\",\"title\": \"深入理解计算机系统\",\"press\": \"机械工业出版社\",\"year\": 2012,\"author\": "不知道",\"price\": 65.00,\"total\": 2,\"stock\": 1},{\"category\": "计算机",\"title\": "算法导论",\"press\": "机械工业出版社",\"year\": 2012,\"author\": "不知道",\"price\": 65.00,\"total\": 2,\"stock\": 1}]'
                        console.log(json_data)
                        request("/book", "POST", JSON.parse(json_data)).then(
                            (response) => {
                                console.log(response);
                                alert(response.message)
                            }
                        )
                    }
                }
                >submit</Button>
            </div>

        </div>
    )
}

export default ImportPage;
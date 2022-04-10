import './CardPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Select } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import request from '../../util/request';
import { useState } from "react";
const { Option } = Select;

function CardPage() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [type, setType] = useState("");
    return (
        <div>
            <Header keyValue="card" />
            <div className='border'>
                <Input className='InputBox' placeholder="name" prefix={<UserOutlined />} onChange={(event) => { setName(event.target.value) }} />
                <Input className='InputBox' placeholder="department" prefix={<HomeOutlined />} onChange={(event) => { setDepartment(event.target.value) }} />
                <Select className='InputBox' placeholder="Identify" onChange={(event) => { setType(event.target.value) }}>
                    <Option value="T">教师</Option>
                    <Option value="G">研究生</Option>
                    <Option value="U">本科生</Option>
                    <Option value="O">管理人员</Option>
                </Select>
                <Button className='Button1' type="primary" onClick={addcard}>
                    Add Card
                </Button>
                <Button className='Button1' type="primary" danger>
                    Delete Card
                </Button>
            </div>
        </div>
    )
}

// 目前仍然属于测试状态
function addcard() {
    request('/card', 'POST',
        {
            "name": "user",
            "apartment": "计算机学院",
            "type": "学生"
        }).then(response => console.log(response))
}

export default CardPage;
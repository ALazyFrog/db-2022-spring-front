import './CardPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, HomeOutlined, CreditCardOutlined } from '@ant-design/icons';
import request from '../../util/request';
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function CardPage() {
    return (
        <div>
            <Header keyValue="card" />
            <div className='border'>
                <Input className='InputBox' placeholder="name" prefix={<UserOutlined />} />
                <Input className='InputBox' placeholder="department" prefix={<HomeOutlined />} />
                <Select className='InputBox' placeholder="Identify" onChange={handleChange}>
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
function addcard(){
    request('/card','POST',
        {"name": "user",
        "apartment": "计算机学院",
        "type": "学生"}).then(response=>console.log(response))
}

export default CardPage;
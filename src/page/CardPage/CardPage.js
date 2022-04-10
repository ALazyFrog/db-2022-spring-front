import './CardPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, HomeOutlined, CreditCardOutlined } from '@ant-design/icons';
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function CardPage() {
    return (
        <div>
            <Header keyValue="card" />
            <div className='border'>
                <Input className='InputBox' size="large" placeholder="name" prefix={<UserOutlined />} />
                <Input className='InputBox' size="large" placeholder="department" prefix={<HomeOutlined />} />
                <Select className='InputBox' placeholder="Identify" onChange={handleChange}>
                    <Option value="T">教师</Option>
                    <Option value="G">研究生</Option>
                    <Option value="U">本科生</Option>
                    <Option value="O">管理人员</Option>
                </Select>
                <Button className='Button1' type="primary" >
                    Add Card
                </Button>
                <Button className='Button1' type="primary" danger>
                    Delete Card
                </Button>
            </div>
        </div>
    )
}

export default CardPage;
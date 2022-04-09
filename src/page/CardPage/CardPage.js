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
            <Input size="large" placeholder="name" prefix={<UserOutlined />} />
            <Input size="large" placeholder="department" prefix={<HomeOutlined />} />
            <Select style={{ width: '100%' }} onChange={handleChange} block>
                <Option value="T">教师</Option>
                <Option value="G">研究生</Option>
                <Option value="U">本科生</Option>
                <Option value="O">管理人员</Option>
            </Select>
            <Button type="primary" block>
                Add Card
            </Button>
            <Button type="primary" danger block>
                Delete Card
            </Button>
        </div>
    )
}

export default CardPage;
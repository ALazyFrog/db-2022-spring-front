import './ReturnPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, CreditCardOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
const onChange = e => {
    console.log('Change:', e.target.value);
};
function ReturnPage() {
    return (
        <div>
            <Header keyValue="return" />
            <Input showCount maxLength={7} onChange={onChange} size="large" placeholder="cno" prefix={<CreditCardOutlined />} />
            <Input showCount maxLength={8} onChange={onChange} size="large" placeholder="bno" prefix={<BookOutlined />} />

            <Button type="primary" block>
                Return
            </Button>
        </div>
    )
}

export default ReturnPage;
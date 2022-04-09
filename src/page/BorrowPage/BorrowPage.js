import './BorrowPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, CreditCardOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
const onChange = e => {
    console.log('Change:', e.target.value);
};
function BorrowPage() {
    return (
        <div>
            <Header keyValue="borrow" />
            <Input showCount maxLength={7} onChange={onChange} size="large" placeholder="cno" prefix={<CreditCardOutlined />} />
            <Input showCount maxLength={8} onChange={onChange} size="large" placeholder="bno" prefix={<BookOutlined />} />
            <DatePicker.RangePicker size="large" style={{ width: '100%' }} />
            <Button type="primary" block>
                Borrow
            </Button>
        </div>
    )
}

export default BorrowPage;
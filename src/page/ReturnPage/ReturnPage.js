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
            <div className='border'>
                <Input className='InputBox' showCount maxLength={7} onChange={onChange} placeholder="cno" prefix={<CreditCardOutlined />} />
                <Input className='InputBox' showCount maxLength={8} onChange={onChange} placeholder="bno" prefix={<BookOutlined />} />

                <Button className='Button' type="primary">
                    Return
                </Button>
            </div>
        </div>
    )
}

export default ReturnPage;
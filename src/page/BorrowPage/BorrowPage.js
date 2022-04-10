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
            <div className='border'>
                <Input className='InputBox' showCount maxLength={7} onChange={onChange} size="large" placeholder="cno" prefix={<CreditCardOutlined />} />
                <Input className='InputBox' showCount maxLength={8} onChange={onChange} size="large" placeholder="bno" prefix={<BookOutlined />} />
                <DatePicker.RangePicker className='InputBox'/>
                <Button className='Button' type="primary">
                    Borrow
                </Button> 
            </div>
            
        </div>
    )
}

export default BorrowPage;
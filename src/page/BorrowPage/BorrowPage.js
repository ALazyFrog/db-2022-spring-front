import './BorrowPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, CreditCardOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { useState } from "react";
import moment from "moment";
function BorrowPage() {
    const [bno, setBno] = useState("");
    const [cno, setCno] = useState("");
    const [date, setDate] = useState(["", ""]);// return like: ['2022-04-30', '2022-05-31'] 打包部分仍未完成

    return (
        <div>
            <Header keyValue="borrow" />
            <div className='border'>
                <Input className='InputBox' showCount maxLength={7} onChange={(event) => { setCno(event.target.value) }} placeholder="cno" prefix={<CreditCardOutlined />} />
                <Input className='InputBox' showCount maxLength={8} onChange={(event) => { setBno(event.target.value) }} placeholder="bno" prefix={<BookOutlined />} />
                <DatePicker.RangePicker className='InputBox' format="YYYY-MM-DD" onChange={(date, dateString) => { setDate(dateString); }} />
                <Button className='Button' type="primary">
                    Borrow
                </Button>
            </div>

        </div>
    )
}

export default BorrowPage;
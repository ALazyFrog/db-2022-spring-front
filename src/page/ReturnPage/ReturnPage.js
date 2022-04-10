import './ReturnPage.css';
import Header from '../../component/Header/Header';
import { Input, Button } from 'antd';
import { CreditCardOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from "react";

function ReturnPage() {
    const [bno, setBno] = useState("");
    const [cno, setCno] = useState("");
    return (
        <div>
            <Header keyValue="return" />
            <div className='border'>
                <Input className='InputBox' showCount maxLength={7} onChange={(event) => { setCno(event.target.value) }} placeholder="cno" prefix={<CreditCardOutlined />} />
                <Input className='InputBox' showCount maxLength={8} onChange={(event) => { setBno(event.target.value) }} placeholder="bno" prefix={<BookOutlined />} />

                <Button className='Button' type="primary" onClick={() => {
                    // TODO: 留一个提交数据的坑位 直接使用bno cno即可
                }}>
                    Return
                </Button>
            </div>
        </div>
    )
}

export default ReturnPage;
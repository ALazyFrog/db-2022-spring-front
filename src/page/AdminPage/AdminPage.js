import './AdminPage.css';
import Header from '../../component/Header/Header';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, CreditCardOutlined } from '@ant-design/icons';
function AdminPage() {
    return (
        <div>
            <Header keyValue="admin" />
            <div className='border'>
                <Input className='InputBox'
                    placeholder="user name" prefix={<UserOutlined />} />
                <Input.Password className='InputBox'
                    placeholder="password" prefix={<LockOutlined />} />
                <Button className='Button' type="primary">
                    Sign in
                </Button> 
            </div>            
        </div>

    )
}



export default AdminPage;
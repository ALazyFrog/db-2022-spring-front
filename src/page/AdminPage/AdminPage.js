import './AdminPage.css';
import Header from '../../component/Header/Header';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, CreditCardOutlined } from '@ant-design/icons';
function AdminPage() {
    return (
        <div>
            <Header keyValue="admin" />
            <Input size="large" placeholder="user name" prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="password" prefix={<LockOutlined />} />
            <Button type="primary" block>
                Sign in
            </Button>
        </div>

    )
}



export default AdminPage;
import './CardPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Select } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import request from '../../util/request';
import { useState } from "react";
const { Option } = Select;

function CardPage() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [type, setType] = useState("");
    const [cno, setCno] = useState("");
    return (
        <div>
            <Header keyValue="card" />
            <div className='border'>
                <Input className='InputBox' placeholder="name" prefix={<UserOutlined />} onChange={(event) => { setName(event.target.value) }} />
                <Input className='InputBox' placeholder="department" prefix={<HomeOutlined />} onChange={(event) => { setDepartment(event.target.value) }} />
                <Select className='InputBox' placeholder="Identify" onChange={(event) => { setType(event.target.value) }}>
                    <Option value="T">教师</Option>
                    <Option value="G">研究生</Option>
                    <Option value="U">本科生</Option>
                    <Option value="O">管理人员</Option>
                </Select>
                <Button className='Button1' type="primary" onClick={() => {
                    request("/card","POST",{"name":name,"department":department,"type":type}).then(
                        (response) => {
                            alert(response.message);
                        }
                    )
                }}>
                    Add Card
                </Button>
                <br />
                <br />
                <Input className='InputBox' placeholder="cno" prefix={<HomeOutlined />} onChange={(event) => { setCno(event.target.value) }} />
                <Button className='Button1' type="primary" danger onClick={() => {
                    request("/card/"+cno,"DELETE").then(
                        (response)=>{
                            alert(response.message);
                        }
                    )
                }}>
                    Delete Card
                </Button>
            </div>
        </div>
    )
}

export default CardPage;
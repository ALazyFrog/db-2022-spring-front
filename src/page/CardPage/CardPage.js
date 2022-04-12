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
                    request("/card", "POST", { "name": name, "department": department, "type": type }).then(
                        (response) => {
                            if (response.code == '4' || response.code == '5') {
                                localStorage.removeItem("token");
                                alert(response.message);
                                window.location.replace('./');
                            }
                            else if (response.code == '0') {
                                alert(response.message + ", 您的卡号是: " + response.data[0]);
                            }
                            else {
                                alert(response.message);
                            }

                        }
                    )
                }}>
                    Add Card
                </Button>
                <br />
                <br />
                <Input className='InputBox' placeholder="cno" prefix={<HomeOutlined />} onChange={(event) => { setCno(event.target.value) }} />
                <Button className='Button1' type="primary" danger onClick={() => {
                    if (cno != "") {
                        request("/card/" + cno, "DELETE").then(
                            (response) => {
                                if (response.code == '4' || response.code == '5') {
                                    localStorage.removeItem("token");
                                    alert(response.message);
                                    window.location.replace('./');

                                }
                                else if (response.code != '0')
                                    alert(response.message)
                            }
                        )
                    }
                    else {
                        alert('cno不可为空!');
                    }
                }}>
                    Delete Card
                </Button>
            </div>
        </div >
    )
}

export default CardPage;
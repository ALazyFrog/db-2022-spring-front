import './ImportPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
const onChange = e => {
    console.log('Change:', e.target.value);
};


function ImportPage() {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [press, setPress] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState(0);
    const [price, setPrice] = useState("");
    const [number, setNumber] = useState(0);
    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <div>
            <Header keyValue="import" />
            <div className='border'>
                <Input className='InputBox' addonBefore="category" style={{ width: '90%' }} placeholder="category" onChange={(event) => { setCategory(event.target.value) }} />
                <Input className='InputBox' addonBefore='title   ' style={{ width: '90%' }} placeholder="title" onChange={(event) => { setTitle(event.target.value) }} />
                <Input className='InputBox' addonBefore='press   ' style={{ width: '90%' }} placeholder="press" onChange={(event) => { setPress(event.target.value) }} />
                <Input className='InputBox' addonBefore='year    ' style={{ width: '90%' }} placeholder="year" onChange={(event) => { setYear(event.target.value) }} />
                <Input className='InputBox' addonBefore='author  ' style={{ width: '90%' }} placeholder="author" onChange={(event) => { setAuthor(event.target.value) }} />
                <Input className='InputBox' addonBefore='price   ' style={{ width: '90%' }} placeholder="price" onChange={(event) => { setPrice(event.target.value) }} />
                <Input className='InputBox' addonBefore='number  ' style={{ width: '90%' }} placeholder="number" onChange={(event) => { setNumber(event.target.value) }} />

                <Button className='Button1' type="primary" onClick={() => { }}>
                    ADD
                </Button>
            </div>
            <div className='border'>
                <Dragger {...props} >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Upload a .txt to import the book
                    </p>
                </Dragger>
            </div>

        </div>
    )
}

export default ImportPage;
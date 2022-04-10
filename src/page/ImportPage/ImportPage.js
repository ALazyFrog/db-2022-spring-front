import './ImportPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const onChange = e => {
    console.log('Change:', e.target.value);
};


function ImportPage() {
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
                <Input className='InputBox' addonBefore="bid     " style={{ width: '90%' }} placeholder="bid" />
                <Input className='InputBox' addonBefore="category" style={{ width: '90%' }} placeholder="category" />
                <Input className='InputBox' addonBefore='title   ' style={{ width: '90%' }} placeholder="title" />
                <Input className='InputBox' addonBefore='press   ' style={{ width: '90%' }} placeholder="press" />
                <Input className='InputBox' addonBefore='year    ' style={{ width: '90%' }} placeholder="year" />
                <Input className='InputBox' addonBefore='author  ' style={{ width: '90%' }} placeholder="author" />
                <Input className='InputBox' addonBefore='price   ' style={{ width: '90%' }} placeholder="price" />
                <Input className='InputBox' addonBefore='number  ' style={{ width: '90%' }} placeholder="number" />

                <Button className='Button1' type="primary" >
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
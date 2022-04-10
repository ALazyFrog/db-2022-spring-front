import './QueryPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Select } from 'antd';
import { Table } from 'antd';


const columns = [
  {
    title: 'bid',
    dataIndex: 'bid',
    sorter: (a, b) => a.bid - b.bid,
    defaultSortOrder: 'descend',
  },
  {
    title: 'category',
    dataIndex: 'category',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.category - b.category,
  },
  {
    title: 'title',
    dataIndex: 'title',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.title - b.title,
  },
  {
    title: 'press',
    dataIndex: 'press',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.press - b.press,
  },
  {
    title: 'year',
    dataIndex: 'year',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.year - b.year,
  },
  {
    title: 'author',
    dataIndex: 'author',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.author - b.author,
  },
  {
    title: 'price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'total',
    dataIndex: 'total',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: 'stock',
    dataIndex: 'stock',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.stock - b.stock,
  },
];

const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function QueryPage() {
    return(
        <div>
            <Header keyValue="query"/>
            <div className='border'>
                <Input className='InputBox' style={{width: '80%'}}  placeholder="category" />
                <Input className='InputBox' style={{width: '80%'}} placeholder="title" />
                <Input className='InputBox' style={{width: '80%'}} placeholder="press" />
                <Input.Group compact>
                    <Select defaultValue="1">
                        <Option value="1">year</Option>
                    </Select>
                    <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
                    <Input
                        className="site-input-split"
                        style={{
                        width: 30,
                        borderLeft: 0,
                        borderRight: 0,
                        pointerEvents: 'none',
                        }}
                        placeholder="~"
                        disabled
                    />
                    <Input
                        className="site-input-right"
                        style={{
                        width: 100,
                        textAlign: 'center',
                        }}
                        placeholder="Maximum"
                    />
                    </Input.Group>
                <Input className='InputBox' style={{width: '80%'}} placeholder="author" />
                <Input className='InputBox' style={{width: '80%'}} placeholder="price" />
            </div>
            <Table className='table' columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default QueryPage;
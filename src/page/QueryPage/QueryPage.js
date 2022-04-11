import './QueryPage.css';
import Header from '../../component/Header/Header';
import { Input, Button } from 'antd';
import { Table } from 'antd';
import request from '../../util/request';
import { useState } from 'react';

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
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [press, setPress] = useState("");
  const [author, setAuthor] = useState("");
  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  return (
    <div>
      <Header keyValue="query" />
      <div className='border'>
        <Input className='InputBox' style={{ width: '90%' }} placeholder="category" onChange={(event) => { setCategory(event.target.value) }} />
        <Input className='InputBox' style={{ width: '90%' }} placeholder="title" onChange={(event) => { setTitle(event.target.value) }} />
        <Input className='InputBox' style={{ width: '90%' }} placeholder="press" onChange={(event) => { setPress(event.target.value) }} />
        <Input.Group compact>
          <Input addonBefore=" year " style={{ width: '26%', textAlign: 'center', marginLeft: '5%' }} placeholder="Minimum" onChange={(event) => { setMinYear(event.target.value) }} />
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
              width: '20%',
              textAlign: 'center',
            }}
            placeholder="Maximum"
            onChange={(event) => { setMaxYear(event.target.value) }}
          />
        </Input.Group>
        <Input className='InputBox' style={{ width: '90%' }} placeholder="author" onChange={(event) => { setAuthor(event.target.value) }} />
        <Input.Group compact>
          <Input addonBefore=" price " prefix="￥" style={{
            width: '26%', textAlign: 'center',
            marginLeft: '5%'
          }} placeholder="Minimum" onChange={(event) => { setMinPrice(event.target.value) }} />
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
              width: '20%',
              textAlign: 'center',
            }}
            prefix="￥"
            placeholder="Maximum"
            onChange={(event) => { setMaxPrice(event.target.value) }}
          />
        </Input.Group>
        <Button className='Button1' type="primary" onClick={() => {
          request('/book?title=算法导论', 'GET').then(response => console.log(response));
        }}>
          Query
        </Button>
      </div>
      <Table className='table' columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

export default QueryPage;
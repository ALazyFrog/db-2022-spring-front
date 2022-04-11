import './BorrowPage.css';
import Header from '../../component/Header/Header';
import { Input, Button, Table } from 'antd';
import { CreditCardOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from "react";
import request from '../../util/request';

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



function BorrowPage() {
  const [bno, setBno] = useState("");
  const [cno, setCno] = useState("");
  const [data, setData] = useState([]);
  return (
    <div>
      <Header keyValue="borrow" />
      <div className='border'>
        <Input className='InputBox' showCount maxLength={7} onChange={(event) => { setCno(event.target.value) }} placeholder="cno" prefix={<CreditCardOutlined />} />
        <Input className='InputBox' showCount maxLength={8} onChange={(event) => { setBno(event.target.value) }} placeholder="bno" prefix={<BookOutlined />} />
        <Button className='Button' type="primary" onClick={() => {
          if (bno != "" && cno != "") {
            request("/borrow", 'POST', { "cid": cno, "bid": bno, "aid": localStorage.getItem("aid") }).then(
              (response) => {
                alert(response.message)
              }
            )
          } else if (cno != "" && bno == "") {
            request("/borrow/" + cno, 'GET',).then(
              (response) => {
                if (response.code != 0) {
                  alert(response.message)
                } else {
                  setData(response.data)
                  console.log(response.data)
                }

              }
            )
          }
        }}>
          Borrow
        </Button>
      </div>
      <Table className='table' columns={columns} dataSource={data} />
    </div>
  )
}

export default BorrowPage; 
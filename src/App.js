import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './page/AdminPage/AdminPage';
import BorrowPage from './page/BorrowPage/BorrowPage';
import ReturnPage from './page/ReturnPage/ReturnPage';
import QueryPage from './page/QueryPage/QueryPage';
import CardPage from './page/CardPage/CardPage';

function App() {
  return (
    <Routes>
      <Route index exact path='/' element={<AdminPage />} />
      <Route path='/borrow' element={<BorrowPage />} />
      <Route path='/return' element={<ReturnPage />} />
      <Route path='/query' element={<QueryPage />} />
      <Route path='/card' element={<CardPage />} />
    </Routes>
  );
}

export default App;

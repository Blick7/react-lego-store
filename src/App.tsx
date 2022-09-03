import Layout from './components/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import Product from './components/Shop/Product';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:itemid" element={<Product />} />
        <Route path="*" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

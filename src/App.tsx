import Layout from './components/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import Product from './components/Shop/Product/Product';
import CartPage from './components/pages/CartPage';
import AuthPage from './components/pages/AuthPage';
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:itemid" element={<Product />} />
        <Route path="/shopping-cart" element={<CartPage />} />
        <Route path="/register" element={<AuthPage type={'Register'} />} />
        <Route path="/signin" element={<AuthPage type={'Sign In'} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

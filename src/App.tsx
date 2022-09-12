import React, { Suspense, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from './UI/LoadingSpinner';
// import HomePage from './components/pages/HomePage';
// import ShopPage from './components/pages/ShopPage';
// import Product from './components/Shop/Product/Product';
// import CartPage from './components/pages/CartPage';
// import AuthPage from './components/pages/AuthPage';
// import ProfilePage from './components/pages/ProfilePage';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ToastContainer } from 'react-toastify';

const HomePage = React.lazy(() => import('./components/pages/HomePage'));
const ShopPage = React.lazy(() => import('./components/pages/ShopPage'));
const Product = React.lazy(() => import('./components/Shop/Product/Product'));
const CartPage = React.lazy(() => import('./components/pages/CartPage'));
const AuthPage = React.lazy(() => import('./components/pages/AuthPage'));
const ProfilePage = React.lazy(() => import('./components/pages/ProfilePage'));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: false });
  }, []);
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Layout>
  );
}

export default App;

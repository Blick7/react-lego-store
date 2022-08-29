import Layout from './components/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeComponent from './components/pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="*" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;

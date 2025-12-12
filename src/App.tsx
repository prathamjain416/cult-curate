import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { BrandsPage } from './pages/BrandsPage';
import { BrandDetailPage } from './pages/BrandDetailPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brand/:id" element={<BrandDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
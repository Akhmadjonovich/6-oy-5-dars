// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Hero from '../components/Hero';
import Products from '../components/Products';

function Home({ searchTerm }) {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Hero products={products} handleBrandChange={setSelectedBrand} />
      <Products
        products={products}
        searchTerm={searchTerm}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </div>
  );
}

export default Home;

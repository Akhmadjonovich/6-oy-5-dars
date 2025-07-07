import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firestore init qilgan faylingiz
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error('Xatolik:', error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className='loader-wrap'>
      <div className='loader'></div>
    </div>
  }

  return (
    <>
      <div className='flex mx-auto justify-start gap-20 pb-10 items-start mt-10 px-20 max-xl:px-10 max-sm:px-5 max-md:flex-col '>
        <div className=' max-md:mx-auto '>
          <img src={product.thumbnail} alt={product.title} className="w-full max-w-200 aspect-[4/3] object-contain rounded" />
        </div>
        <div className='pt-10 max-md:pt-0'>
          <h1 className='text-2xl font-bold pb-5 max-lg:text-xl'>{product.title}</h1>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Narxi:</strong> ${product.price}</p>
          <p><strong>RAM:</strong> {product.ram} GB</p>
          <p><strong>Xotira:</strong> {product.memory} GB</p>
          <p><strong>Yil:</strong> {product.year}</p>
          <p><strong>Tel:</strong> {product.phone}</p>
          <p><strong>Nickname:</strong> {product.nickname}</p>
          <p className="mt-4 text-gray-700"><strong>Tavsif:</strong> {product.description}</p>
          <p className="mt-2 text-red-600"><strong>Kamchiligi:</strong> {product.downside}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

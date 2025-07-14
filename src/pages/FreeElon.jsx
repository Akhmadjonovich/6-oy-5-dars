// src/pages/FreeElon.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

function FreeElon() {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [ram, setRam] = useState('');
  const [memory, setMemory] = useState('');
  const [year, setYear] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState('');
  const [downside, setDownside] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);

  const [isCooldown, setIsCooldown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = '';

    try {
      if (imageFile) {
        // 1. FormData yuborish
        const formData = new FormData();
        formData.append('image', imageFile);

        const res = await fetch('https://axromarkerbackend.onrender.com/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        imageUrl = data.url; // ImageKit dan qaytgan rasm URL
      }

      // 2. Firestore'ga saqlash
      await addDoc(collection(db, 'products'), {
        title,
        brand,
        price: parseFloat(price),
        ram,
        memory,
        year,
        thumbnail: imageUrl,
        description,
        downside,
        phone,
        nickname,
        createdAt: Timestamp.now(),
      });

      toast.success(" E'lon muvaffaqiyatli qo‘shildi!" ,{
        position: "top-center",
        autoClose: 5000,
      })
      navigate('/');
    } catch (error) {
      console.error('❌ Xatolik:', error);
      toast.error("❌ E'lonni saqlab bo‘lmadi. Keyinroq urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };
  
useEffect(() => {
    const savedTime = localStorage.getItem('lastElonTime');

    if (savedTime) {
      const lastTime = new Date(parseInt(savedTime));
      const now = new Date();
      const diff = 24 * 60 * 60 * 1000 - (now - lastTime);

      if (diff > 0) {
        setIsCooldown(true);
        setTimeLeft(diff);
      }
    }
  }, []);

  useEffect(() => {
    if (!isCooldown) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          setIsCooldown(false);
          localStorage.removeItem('lastElonTime');
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCooldown]);
  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-xl mx-auto space-y-4 my-5 shadow-xl bg-gray-100 rounded-2xl">
      <h2 className="text-xl font-semibold text-center">Bepul e'lon berish</h2>

      <input placeholder="Toliq nomi" value={title} onChange={(e) => setTitle(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Narxi (faqat Dollorda $)" value={price} onChange={(e) => setPrice(e.target.value)} required className="border outline-none p-2 w-full rounded" />
      <input placeholder="RAM" value={ram} onChange={(e) => setRam(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Xotirasi" value={memory} onChange={(e) => setMemory(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Yili" value={year} onChange={(e) => setYear(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input type="file" accept="image/png, image/jpeg" onChange={(e) => setImageFile(e.target.files[0])} className="border p-2 w-full rounded outline-none" required/>
      <input placeholder="Tavsif" value={description} onChange={(e) => setDescription(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Kamchiligi" value={downside} onChange={(e) => setDownside(e.target.value)} className="border p-2 w-full rounded outline-none" />
      <input placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border p-2 w-full rounded outline-none" />
      <input placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required className="border p-2 w-full rounded outline-none" />

      <button
      onClick={() => {
        if (!isCooldown) {
          setIsOpenModal(true);
          localStorage.setItem('lastElonTime', Date.now().toString());
          setIsCooldown(true);
          setTimeLeft(24 * 60 * 60 * 1000);
        }
      }}
        type="submit"
        disabled={isCooldown}
        className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Yuborilmoqda..." :""}
        {isCooldown ? (
          <h3>
            Qoldi: {Math.floor(timeLeft / (1000 * 60 * 60))} soat {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))} min
          </h3>
        ) : (
          <h3>E'lon berish</h3>
        )}
      </button>
      {
      loading && (<div className='fixed px-20 max-xl:px-10 max-sm:px-5 inset-0 bg-black/30 items-center z-50'>
          <div className='loader-wrap z-100'>
            <div className='loader'></div>
          </div> 
        </div>)
      }
    </form>
    
  );
}

export default FreeElon;

// src/pages/FreeElon.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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

      alert("✅ E'lon muvaffaqiyatli qo‘shildi!");
      navigate('/');
    } catch (error) {
      console.error('❌ Xatolik:', error);
      alert("❌ E'lonni saqlab bo‘lmadi. Keyinroq urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center">Bepul e'lon berish</h2>

      <input placeholder="Toliq nomi" value={title} onChange={(e) => setTitle(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Narxi" value={price} onChange={(e) => setPrice(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="RAM" value={ram} onChange={(e) => setRam(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Xotirasi" value={memory} onChange={(e) => setMemory(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Yili" value={year} onChange={(e) => setYear(e.target.value)} required className="border p-2 w-full rounded" />
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="border p-2 w-full rounded" required />
      <input placeholder="Tavsif" value={description} onChange={(e) => setDescription(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Kamchiligi" value={downside} onChange={(e) => setDownside(e.target.value)} className="border p-2 w-full rounded" />
      <input placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} required className="border p-2 w-full rounded" />
      <input placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required className="border p-2 w-full rounded" />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Yuborilmoqda..." : "E'lon berish"}
      </button>
    </form>
  );
}

export default FreeElon;

import React, { useState } from 'react';
import axios from 'axios';

function AdollorgaElon() {
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Diqqat, $1 tolashga roziligingizni belgilang.");
      return;
    }

    setLoading(true);

    const message = `
📱 *Yangi 10,000 e'lon buyurtmasi!*
👤 Nickname: @${nickname}
📞 Tel: ${phone}
💵 10,000 tolashga rozilik: ${agree ? '✅ Ha' : '❌ Yo‘q'}
`;

    const telegramBotToken = "8196467518:AAEG3Q0sLjXcxbLv9_QYhqZOwHv3w9tdW6s"; // O'ZGARTIR
    const chatId = "6465261601"; // O'ZGARTIR
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      });
      setSent(true);
    } catch (err) {
      console.log("Xatolik:", err.response?.data || err.message); // <--- BU YANGI QATOR
      alert("Xabar yuborilmadi. Keyinroq urinib ko‘ring.");
    }finally {
      setLoading(false);
    }
  };

  if (sent) {
    return <div className="p-4 text-green-600 text-center">✅ So‘rovingiz yuborildi. Tez orada siz bilan bog‘lanamiz!</div>;
  }

  return (
    <div className='h-screen w-full bg-gray-100 pt-10'>
      <form onSubmit={handleSubmit} className="max-w-md max-sm:w-[95%] mx-auto mt-5 p-5 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl max-sm:text-xl font-bold mb-4">📢 10,000 evaziga e'lon joylashtirish</h2>

      <label className="block mb-2 font-semibold">Nickname</label>
      <input
        type="text"
        className="w-full mb-4 px-3 py-2 border outline-none rounded"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
      />

      <label className="block mb-2 font-semibold">Telefon raqam</label>
      <input
        type="tel"
        className="w-full mb-4 px-3 py-2 border outline-none rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+998xxxxxxxxx"
        required
      />

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={agree}
          required
          onChange={(e) => setAgree(e.target.checked)}
        />
        Men  <span className='text-orange-500 px-1'> 10,000 </span> so'm to‘lashga roziman
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1E74C8] text-white font-semibold py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Yuborilmoqda...' : "So'rovni yuborish"}
      </button>
    </form>
    </div>
  );
}

export default AdollorgaElon;

import React from 'react'

const Qollanma = () => {
  return (
    <div className='container px-20 max-xl:px-10 max-sm:px-5 py-4 '>
        <div>
            <h2 className='text-2xl font-bold max-lg:text-xl max-sm:text-lg'>1. E’lon joylash</h2>
            <p>Saytimizda e’lon berish uchun akkaunt shart emas. “E’lon berish” tugmasini bosing va kerakli ma’lumotlarni kiriting:</p>
            <ul className='pt-5 list-disc list-inside'>
                <li>Qanday gadjet sotmoqchisiz? (masalan, iPhone 17 pro max, MacBook Air)</li>
                <li>Holati va narxi</li>
                <li>Bog‘lanish uchun telefon raqamingiz yoki Telegram’dagi username’ingiz</li>
                <li>Rasm yuklang va qisqacha tavsif yozing</li>
            </ul>

            <h2 className='text-2xl font-bold pt-5 max-lg:text-xl max-sm:text-lg'>2. Xaridorlar mahsulotingizni ko‘radi</h2>
            <p>Siz joylashtirgan e’lon saytning bosh sahifasida paydo bo‘ladi. Kimdir sizning e’loningizni ko‘rib, “Batafsil” tugmasini bossagina, raqamingiz yoki nickname’ingiz ularga ko‘rsatiladi.</p>

            <h2 className='text-2xl font-bold pt-5 max-lg:text-xl max-sm:text-lg'>3. To‘g‘ridan-to‘g‘ri aloqa</h2>
            <p>Xaridor sizga bevosita bog‘lanadi — qo‘ng‘iroq qiladi yoki Telegram orqali yozadi. Shunchaki kelishasiz va uchrashasiz. Saytda akkaunt ochish, login qilish yoki chatlashish keraksiz. Tez, oson va to‘g‘ri.</p>
        </div>
        <div>
            <h2 className='text-2xl font-bold pt-10 max-lg:text-xl max-sm:text-lg'>❓ Ko‘p so‘raladigan savollar (FAQ)</h2>
            <ul className='pt-2'>
                <li>Savol: E’lon joylash uchun ro‘yxatdan o‘tish shartmi?</li>
                <li>Javob: Yo‘q. Siz oddiygina “E’lon berish” tugmasini bosib, kerakli ma’lumotlarni kiritsangiz kifoya.</li>
                <li>Savol: E’lonim qachon ko‘rinadi?</li>
                <li>Javob: E’loningizni joylashtirgan zahotingiz saytda ko‘rinadi.</li>
                <li>Savol: Mahsulotni qanday o‘chiraman yoki tahrirlayman?</li>
                <li>Javob: Hozircha e’lonni o‘chirish faqat admin orqali amalga oshiriladi. Tez orada e’lonni tahrirlash xizmati ham qo‘shiladi.</li>
            </ul>
        </div>
        <div>
            <h2 className='text-2xl font-bold pt-5 max-lg:text-xl max-sm:text-lg'>📋 E’lon berish qoidalari</h2>
            <ul className='pt-5 list-disc list-inside'>
                <li>E’lon faqat real va mavjud mahsulotlar uchun bo‘lishi kerak.</li>
                <li>Noaniq, yolg‘on yoki aldamchi ma’lumotlar taqiqlanadi.</li>
                <li>So‘kinish, haqoratli so‘zlar yoki spam e’lonlar avtomatik o‘chiriladi.</li>
                <li>Bitta mahsulot uchun faqat bitta e’lon joylashtiring.</li>
            </ul>
        </div>
        <div>
            <h2 className='text-2xl font-bold pt-5 max-lg:text-xl max-sm:text-lg'>🔒 Xavfsiz savdo bo‘yicha maslahatlar</h2>
            <ul className='pt-5 list-disc list-inside'>
                <li>Xaridor bilan faqat ishonchli joyda uchrashin</li>
                <li>Pulni oldindan yubormang, mahsulotni ko‘rmaguncha to‘lamang.</li>
                <li>Iloji bo‘lsa, naqd hisob-kitobni afzal biling.</li>
                <li>Shubhali e’lonlar yoki foydalanuvchilarni bizga xabar bering.</li>
            </ul>
        </div>
        <div className='flex items-center justify-center pt-10 opacity-70'>
            <img src="/main-logo2.png" className='w-10 mx-[-7px]' alt="" />
            <p className='max-sm:text-[10px]'>xro <span className='text-blue-900'>Market</span> by Axrorbek Nematov</p>
        </div>
    </div>
  )
}

export default Qollanma
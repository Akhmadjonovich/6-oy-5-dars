import React from 'react'

const ElonModel = ({isOpenModel, setIsOpenModel}) => {
  return (
    <div className='fixed px-20 max-xl:px-10 max-sm:px-5 inset-0 bg-[#E2E8F0] items-center z-50'>
        <h1 className=' text-center text-3xl font-bold pt-15 pb-10 max-sm:text-2xl'>E'lon berish</h1>
        <div>
            <h2 className='text-lg font-semibold' >💵 Nega $1 evaziga e'lon berish foydali?</h2>
            <p className='max-sm:text-sm'>🟢 Atiga $1 to‘lab, e’loningiz saytning yuqori qismida joylashgan swiperda 1 kun davomida doimiy aylanadi.
            Bu maxsus joy har kuni minglab foydalanuvchilar ko‘z oldida bo‘ladi.
            Natijada, e’loningiz ko‘proq ko‘rinadi, tezroq topiladi, va sotilish ehtimoli ancha yuqori bo‘ladi.
            </p>
        </div>
        <div className=' *:text-white flex items-center justify-center gap-10 h-[40%] max-sm:flex-col *:max-sm:w-[80%]'>
            <button className='text-2xl bg-blue-600 p-5 max-sm:p-3 rounded-2xl max-md:text-xl max-sm:text-lg '>$1 ga Elon berish</button>
            <button className='text-2xl bg-blue-600 p-5 max-sm:p-3 rounded-2xl max-md:text-xl max-sm:text-lg '>Tekinga Elon berish</button>
        </div>
        <button onClick={()=> setIsOpenModel(!isOpenModel)}  className='absolute top-4 right-4 p-2 text-lg'>✖</button>
    </div>
  )
}

export default ElonModel
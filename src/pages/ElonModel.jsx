import React from 'react'
import { Link } from 'react-router-dom'

const ElonModel = ({isOpenModel, setIsOpenModel}) => {
  return (
    <div className='fixed px-20 max-xl:px-10 max-sm:px-5 inset-0 bg-[#E2E8F0] items-center z-50'>
        <h1 className=' text-center text-3xl font-bold pt-15 pb-10 max-sm:text-2xl'>E'lon berish</h1>
        <div>
            <h2 className='text-lg font-semibold' >💵 Nega 10,000 s'om evaziga e'lon berish foydali?</h2>
            <p className='max-sm:text-sm'>🟢 Atiga 10,000 s'om to‘lab, e’loningiz saytning yuqori qismida joylashgan swiperda 1 kun davomida doimiy aylanadi.
            Bu maxsus joy har kuni barcha foydalanuvchilar ko‘z oldida bo‘ladi.
            Natijada, e’loningiz ko‘proq ko‘rinadi, tezroq topiladi, va sotilish ehtimoli ancha yuqori bo‘ladi.
            </p>
        </div>
        <div className=' *:text-white mx-auto flex items-center justify-center gap-10 h-[40%] max-sm:flex-col '>
            <Link to="/adollorgaElon"><button className='max-sm:w-60 text-2xl bg-[#1E74C8] shadow-xl hover:bg-transparent hover:text-[#1E74C8] hover:scale-105 transition-all border-2  border-transparent hover:border-[#1E74C8] p-5 max-sm:p-3 rounded-2xl max-md:text-xl max-sm:text-lg '>10,000 ga Elon berish</button></Link>
            <Link to="/freeElon"><button className='max-sm:w-60 text-2xl bg-[#1E74C8] shadow-xl hover:bg-transparent hover:text-[#1E74C8] hover:scale-105 transition-all border-2  border-transparent hover:border-[#1E74C8] p-5 max-sm:p-3 rounded-2xl max-md:text-xl max-sm:text-lg '>Tekinga Elon berish</button></Link>
        </div>
        <button onClick={()=> setIsOpenModel(!isOpenModel)}  className='absolute top-4 right-4 p-2 text-lg'>✖</button>
        <div className='flex items-center absolute mx-auto  right-0 left-0 bottom-5 justify-center pt-5 opacity-70'>
            <img src="/main-logo2.png" className='w-10 mx-[-7px] max-md:w-7 max-sm:w-5' alt="" />
            <p className='max-sm:text-[10px]'>xro <span className='text-blue-900'>Market</span> by Axrorbek Nematov</p>
        </div>  
    </div>
  )
}

export default ElonModel
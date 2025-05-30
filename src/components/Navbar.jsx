import React from 'react'

function Navbar() {
  return (
    <div className='px-20 pt-4 flex items-center justify-between container mx-auto'>
      <div className="flex gap-2">
        <a className='text-4xl font-bold' href="">Axro<span className='text-blue-700'>Market</span> </a>
      </div>
      <form className="flex items-center border border-blue-500 rounded-md overflow-hidden w-lg h-8  ">
          <input className="flex-1 p-2 outline-none" placeholder="Kitob nomi yoki muallifi orqali qidiring" type="search"/>
          <button className="bg-blue-500 text-white p-3 hover:bg-blue-600 cursor-pointer "><i className="fas fa-search"></i></button>
      </form>
      <div className=" items-center justify-between gap-3 flex ">
          <a href="https://t.me/Akhrorbek_blog" target="_blank"><img className="w-10 h-10" src="/telegram.png" alt=""/></a>
          <a href="https://instagram.com/akhmadjonovch"><img className="w-8 h-8" src="/instagram.png" alt=""/></a>
          <h3 className="text-lg font-bold">+998 50 200 52 04</h3>
      </div>
      <a href="./savat.html" className="flex items-center gap-5 py-1.5 px-2 bg-blue-500 rounded-xl *:text-white">
        <h2 className="text-xl font-semibold">Savat</h2>
        <i className="fa fas fa-shopping-basket fa-xl"></i>
      </a>
    </div>
  )
}

export default Navbar
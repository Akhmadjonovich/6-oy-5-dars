import React from 'react'

function Navbar() {

  return(
    
    <div>
      <div className='px-20 max-xl:px-10 max-sm:px-5 pt-4 flex items-center justify-between container mx-auto'>
        <div className="flex gap-2 ml-[-15px]">
          <a className='text-4xl max-md:text-2xl flex items-center font-bold max-lg:text-3xl' href="">
            <img className='w-17 max-md:w-14 p-0 mr-[-12px]' src="/main-logo.svg" alt="" />xro<span className='text-[#1E74C8] '>Market</span> </a>
        </div>
        <form className="flex items-center border max-sm:hidden border-blue-500 rounded-md overflow-hidden w-lg  max-2xl:w-md max-lg:w-90 max-md:w-70 max-sm:w-50 h-8 max-md:h-7 ">
            <input className="flex-1 p-2 outline-none max-sm:w-10" placeholder="Qidirish" type="search"/>
            <button className="bg-blue-500 text-white p-3 hover:bg-[#1E74C8] cursor-pointer "><i className="fas fa-search"></i></button>
        </form>
        {/* <div className="max-lg:hidden items-center justify-between gap-3 flex ">
            <a href="https://t.me/Akhrorbek_blog" target="_blank"><img className="w-10 h-10" src="/telegram.png" alt=""/></a>
            <a href="https://instagram.com/akhmadjonovch"><img className="w-8 h-8" src="/instagram.png" alt=""/></a>
            <h3 className="text-lg font-bold max-xl:hidden">+998 50 200 52 04</h3>
        </div> */}
        <a href="./savat.html" className="max-lg:hidden flex items-center gap-4 py-1.5 px-2 bg-[#1E74C8] rounded-xl *:text-white">
          <h2 className="text-xl font-semibold ">Tanlanganlar</h2>
          <i className="fa fas fa-shopping-basket fa-xl"></i>
        </a>
        <button className='lg:hidden text-2xl max-md:text-xl'><i className='fa fa-bars'></i></button>
      </div>
      
    </div>
  )
}

export default Navbar
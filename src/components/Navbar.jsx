import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Navbar({searchTerm, setSearchTerm}) {

  const [isOpen, setIsOpen] = useState(false); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [isOpen]);


    let location = useLocation()

    useEffect(()=>{
      setIsSearchOpen(false);
    }, [location.pathname])
  return(
    
    <div className='relative shadow-lg rounded-xl'>
      <div className='px-20 max-xl:px-10 max-sm:px-5 pt-4 flex items-center justify-between mx-auto container '>
        <div className="flex gap-2 ml-[-15px]">
          <Link to="/"><div className='text-4xl max-md:text-2xl flex items-center font-bold max-lg:text-3xl'>
            <img className='w-17 max-md:w-14 p-0 mr-[-12px]' src="/main-logo2.png" alt="" />xro<span className='text-[#1E74C8] '>Market</span> </div>
          </Link>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center border max-sm:hidden border-blue-500 rounded-md overflow-hidden w-lg  max-2xl:w-md max-lg:w-90 max-md:w-70 max-sm:w-50 h-8 max-md:h-7 ">
            <input className="flex-1 p-2 outline-none max-sm:w-10" placeholder="Qidirish" type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type="button" className="bg-[#1E74C8] text-white p-3 hover:bg-[#1E74C8] cursor-pointer "><i className="fas fa-search"></i></button>
        </form>
        <Link to="/qollanma"><h3 className='max-lg:hidden max-xl:text-lg text-xl shadow-2xl font-semibold hover:text-blue-800 transition-all hover:scale-105'>Qo'llanma</h3></Link>
        {/* <div className="max-lg:hidden items-center justify-between gap-3 flex ">
            <a href="https://t.me/Akhrorbek_blog" target="_blank"><img className="w-10 h-10" src="/telegram.png" alt=""/></a>
            <a href="https://instagram.com/akhmadjonovch"><img className="w-8 h-8" src="/instagram.png" alt=""/></a>
            <h3 className="text-lg font-bold max-xl:hidden">+998 50 200 52 04</h3>
        </div> */}
        <div className="max-lg:hidden flex items-center gap-4 py-1.5 px-2 bg-[#1E74C8] rounded-xl *:text-white">
          <Link to="/SelectedItems"><h2 className="text-xl font-semibold ">Tanlanganlar</h2></Link>
          <i className="fa fas fa-shopping-basket fa-xl"></i>
        </div>
        <button onClick={toggleMenu} className='lg:hidden text-2xl max-md:text-xl'><i className='fa fa-bars'></i></button>
      </div>
      {isOpen && <div className='bg-gray-100 h-screen absolute z-10  top-0 w-[80%]'>
          <button onClick={toggleMenu} className='absolute right-0 p-2 text-lg'>✖</button>
          <ul className=' p-7 mt-2 *:hover:bg-gray-200 *:bg-white  *:transition-all  *:hover:scale-105 *:rounded-xl '>
            <Link to="/"><li onClick={toggleMenu} className='flex items-center gap-1 bg-white rounded-xl text-[15px] font-semibold p-2'><i className='fa fa-home'> </i>Asosiy sahifa</li></Link>
            <li onClick={()=>{
              toggleMenu();
              setIsSearchOpen(!isSearchOpen)
            }} className='flex items-center gap-1 text-[15px] font-semibold my-2 p-2'><i className="fa-solid fa-magnifying-glass "></i>Qidirish</li>
            <Link to="/qollanma"><li onClick={toggleMenu} className='flex bg-white rounded-xl items-center gap-1 text-[15px] font-semibold p-1'><img src="/main-logo2.png" className='w-8 mx-[-7px]' alt="" />Qo'llanma</li></Link>
          </ul>
      </div>}
      {isSearchOpen && (
        <input
          type="text"
          placeholder="Qidiruv..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-sm mx-auto px-4 my-1 outline-none border-[#1E74C8] py-2 border rounded-md block"
        />
        
      )}
    </div>
  )
}

export default Navbar
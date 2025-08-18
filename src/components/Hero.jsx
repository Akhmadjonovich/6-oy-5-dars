import React, {useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { SelectedContext } from '../context/SelectedContext';
import brands from '../data/Brands';
const Hero = ({products , handleBrandChange}) => {
  let {selectedItems , toggleSelect} = useContext(SelectedContext)

const [isOpenK, setIsOpenK] = useState(false); 

  const toggleKateg = () => {
    setIsOpenK(!isOpenK); 
  };

  useEffect(() => {
    if (isOpenK) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenK]);
  return (
    <>
    <div className='flex container mx-auto px-10 mt-3 max-sm:px-5 justify-between items-center lg:hidden my-1'>
        <button onClick={toggleKateg} className='py-1.5 px-2 bg-[#1E74C8] rounded-lg text-white max-md:text-sm max-sm:text-[10px] max-sm:rounded-sm'>
          Kategoriyalar
        </button>
        <Link to="/SelectedItems"><button className='py-1.5 px-2 bg-[#1E74C8] rounded-lg text-white max-md:text-sm max-sm:text-[10px] max-sm:rounded-sm'>
          Tanlanganlar
        </button></Link>
      </div>
    <div className=' container mx-auto gap-5 flex justify-between items-center px-20 max-sm:px-4 max-xl:px-10  mt-10'>
      
      { isOpenK && <div className='bg-gray-300 max-lg:bg-gray-100 relative max-lg:absolute z-10 left-0 max-lg:w-[80%] max-lg:h-screen max-lg:rounded top-0 w-full h-[400px] max-2xl:h-[350px] rounded-xl p-5'>
        <button onClick={toggleKateg} className='absolute right-2 top-2 max-lg:flex hidden text-lg'>✖</button>
        <h2 className='text-lg font-semibold max-lg:font-bold mb-5 max-sm:text-[16px]'>Kategoriyalar:</h2>
        <ul className='text-lg *:cursor-pointer max-sm:text-sm *:bg-gray-50 max-lg:*:bg-white space-y-2 *:rounded-lg *:hover:scale-105 *:transition-all'>
  {brands.map((brand, i) => (
    <li
      key={i}
      onClick={() => {handleBrandChange(brand.name);
        toggleKateg()
      }}
      className={`flex items-center gap-2 p-1 ${brand.py || ''}`}
    >
      <img
        src={brand.logo}
        className={`${brand.w} ${brand.margin || ''}`}
        alt={brand.label}
      />
      {brand.label}
    </li>
  ))}
</ul>

      </div>}
      <div className='overflow-y-auto  bg-[#E2E8F0] max-lg:hidden max-lg:bg-gray-100 relative max-lg:absolute z-10 left-0 max-lg:w-[80%] max-lg:h-screen max-lg:rounded top-0 w-full h-[400px] max-2xl:h-[350px] rounded-xl p-5'>
        <button onClick={toggleKateg} className='absolute right-2 top-2 max-lg:flex hidden'>✖</button>
        <h2 className='text-lg font-semibold max-lg:font-bold mb-5 max-sm:text-sm'>Kategoriyalar:</h2>
        <ul className='text-lg *:cursor-pointer max-sm:text-sm *:bg-gray-50 max-lg:*:bg-white space-y-2 *:rounded-lg *:hover:scale-105 *:transition-all'>
  {brands.map((brand, i) => (
    <li
      key={i}
      onClick={() => handleBrandChange(brand.name)}
      className={`flex items-center gap-2 p-1 ${brand.py || ''}`}
    >
      <img
        src={brand.logo}
        className={`${brand.w} ${brand.margin || ''}`}
        alt={brand.label}
      />
      {brand.label}
    </li>
  ))}
</ul>

      </div>
        
        <section className="bg-slate-300 p-1 flex justify-between items-center  rounded-xl w-4xl max-2xl:w-3xl max-xl:w-2xl h-[400px] max-2xl:h-[350px] max-lg:w-full">

            <Swiper
                spaceBetween={100}
                slidesPerView={1}
               
                autoplay={{
                    delay:2000,
                    duration:2
                }}
                loop= {true}
                navigation
                modules={[Autoplay, Navigation]}
                >
                    
                    {products?.map((d) => {
                      let isSelected = selectedItems.find(i => i.id === d.id);
                    return (<SwiperSlide key={d.id} >
                        <div className='flex max-[500px]:flex-col items-center  shadow-2xl w-full bg-slate-200 rounded-lg h-[395px] max-2xl:h-[345px] overflow-hidden border-3 border-gray-300'>
                            <div className='flex items-center justify-between'>
                                <img className="w-full p-1 aspect-[4/3] max-w-120 max-[500px]:h-40 object-cover cover rounded-t-lg" src="/fn-kurs.jpg" alt={d.title}/>
                                {/* <img className="w-[50%] max-[500px]:flex hidden p-1 h-[300px] max-[500px]:h-40 object-cover cover rounded-t-lg" src={d.thumbnail} alt={d.title}/> */}
                            </div>
                            
                            <div className='p-5'>
                              <h2 className='text-xl font-bold max-md:text-lg'>👨‍💻 Yangi Frontend Kursi Start Olyapti!</h2>
                              <p className='max-md:text-[12px]'>HTML va CSS ni noldan boshlab, amaliy mashg‘ulotlar orqali o‘rganamiz!</p>
                              <h3 className='text-lg max-md:text-sm font-semibold max-sm:hidden'>Agar siz:</h3>
                              <ul className='py-5 max-md:py-2 max-md:*:text-[12px] max-sm:hidden'>
                                <li>Web sayt yasashni o‘rganmoqchi bo‘lsangiz</li>
                                <li>Frontend dasturchi bo‘lishni xohlasangiz</li>
                                <li>Noldan boshlayotgan bo‘lsangiz</li>
                              </ul>
                              <h4 className='font-bold'>Batafsil : 50 200 52 04 </h4>
                            </div>
                        </div>
                        
                    </SwiperSlide>

)})}
                </Swiper>
        
      
        </section>

        
    </div>
    </>
  )
}

export default Hero
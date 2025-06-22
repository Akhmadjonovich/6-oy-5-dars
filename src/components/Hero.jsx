import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Hero = () => {
    let [products, setProduct] = useState([]);

useEffect(() => {
  let getProduct = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);  
    } catch (error) {
      console.error("Ma'lumot olishda xatolik:", error);
    }
  };
  
  getProduct();
}, []);


const [isOpenK, setIsOpenK] = useState(false); 

  const toggleKateg = () => {
    setIsOpenK(!isOpenK); 
  };
  return (
    <>
    <div className='flex container mx-auto px-10 max-sm:px-5 justify-between items-center lg:hidden my-1'>
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
        <ul className='text-lg max-sm:text-sm *:bg-gray-400 max-lg:*:bg-white  space-y-2   *:rounded-lg *:hover:scale-105 *:transition-all'>
          <li className='flex items-center gap-2 p-1'><img src="/redmi.png" className='w-8' alt="" />Xiomi & RedMi</li>
          <li className='flex items-center gap-2 p-1 max-sm:py-2.5'><img src="/samsung.png" className='w-8' alt="" />Samsung</li>
          <li className='flex items-center gap-2 p-1 max-sm:py-2.5'><img src="/iphone.png" className='w-12 m-[-8px]' alt="" />Iphone</li>
          <li className='flex items-center gap-2 p-1'><img src="/honor.png" className='w-8' alt="" />Honor</li>
          <li className='flex items-center gap-2 p-1 py-2.5'><img src="/laptop.png" className='w-11 m-[-6px]' alt="" />Laptops</li> 
          <li className='flex items-center gap-2 p-1'><img src="/comp.png" className='w-8' alt="" />Komputers</li> 
        </ul>
      </div>}
      <div className='bg-gray-300 max-lg:hidden max-lg:bg-gray-100 relative max-lg:absolute z-10 left-0 max-lg:w-[80%] max-lg:h-screen max-lg:rounded top-0 w-full h-[400px] max-2xl:h-[350px] rounded-xl p-5'>
        <button onClick={toggleKateg} className='absolute right-2 top-2 max-lg:flex hidden'>✖</button>
        <h2 className='text-lg font-semibold max-lg:font-bold mb-5 max-sm:text-sm'>Kategoriyalar:</h2>
        <ul className='text-lg max-sm:text-sm *:bg-gray-400 max-lg:*:bg-white  space-y-2   *:rounded-lg *:hover:scale-105 *:transition-all'>
          <li className='flex items-center gap-2 p-1'><img src="/redmi.png" className='w-8' alt="" />Xiomi & RedMi</li>
          <li className='flex items-center gap-2 p-1 max-sm:py-2.5'><img src="/samsung.png" className='w-8' alt="" />Samsung</li>
          <li className='flex items-center gap-2 p-1 max-sm:py-2.5'><img src="/iphone.png" className='w-12 m-[-8px]' alt="" />Iphone</li>
          <li className='flex items-center gap-2 p-1'><img src="/honor.png" className='w-8' alt="" />Honor</li>
          <li className='flex items-center gap-2 p-1 py-2.5'><img src="/laptop.png" className='w-11 m-[-6px]' alt="" />Laptops</li> 
          <li className='flex items-center gap-2 p-1'><img src="/comp.png" className='w-8' alt="" />Komputers</li> 
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
                    
                    {products.map((d) => (
                    <SwiperSlide key={d.id} >
                        <div className='flex max-[500px]:flex-col items-center  shadow-2xl w-full bg-slate-200 rounded-lg h-[395px] max-2xl:h-[345px] overflow-hidden border-3 border-gray-300'>
                            <div className='flex items-center justify-between'>
                                <img className="w-full p-1 h-[300px] max-[500px]:h-40 object-cover cover rounded-t-lg" src="/tel2-1.png" alt={d.title}/>
                                <img className="w-full max-sm:flex hidden p-1 h-[300px] max-[500px]:h-40 object-cover cover rounded-t-lg" src="/tel2-1.png" alt={d.title}/>
                            </div>
                            <div className="p-5 max-w-[600px] w-[60%]">
                              <h1 className="name text-xl font-bold">Tel model</h1>
                              <ul className='text-sm font-semibold'>
                                <li>Xotira: 128 GB</li>
                                <li>Batareya: yaxshi</li>
                                <li>Yili: 2024</li>
                                <li className='text-orange-500'>Narxi: $200</li>
                              </ul>
                              <div className="items-center justify-between flex pt-2">
                                  <a href="./booking.html" className="text-white text-lg py-0.5 px-3 bg-blue-500 rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">Aloqa</a>
                                  <button className=" w-10 h-10 rounded-full border border-blue-600 cursor-pointer hover:scale-105 transition-all"><i class="fa fas fa-shopping-basket text-blue-700 "></i></button>
                              </div>
                            </div>
                        </div>
                    </SwiperSlide>

))}
                </Swiper>
        
      
        </section>

        
    </div>
    </>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { Autoplay,Navigation } from 'swiper/modules';

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

const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  return (
    <>
    <div className='flex container mx-auto px-10 max-sm:px-5 justify-between items-center lg:hidden my-2'>
        <button className='py-1.5 px-2 bg-[#1E74C8] rounded-lg text-white max-md:text-sm max-sm:text-[10px] max-sm:rounded-sm'>
          Kategoriyalar
        </button>
        <button className='py-1.5 px-2 bg-[#1E74C8] rounded-lg text-white max-md:text-sm max-sm:text-[10px] max-sm:rounded-sm'>
          Tanlanganlar
        </button>
      </div>
    <div className='relative container mx-auto gap-5 flex justify-between items-center px-20 max-sm:px-4 max-xl:px-10  mt-10'>
      
      <div className='bg-gray-400 w-full h-[400px] max-2xl:h-[350px] max-lg:hidden rounded-xl p-5'>
        <h2 className='text-lg font-semibold mb-5'>Kategoriyalar:</h2>
        <ul className='text-lg *:bg-gray-500 space-y-2 *:p-1 *:rounded-lg *:hover:scale-105 *:transition-all'>
          <li>Xiomi & RedMi</li>
          <li>Samsung</li>
          <li>Iphone</li>
          <li>Honor</li>
          <li>Laptops</li> 
          <li>komputers</li> 
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
                        <div className='flex max-[500px]:flex-col items-center shadow-2xl w-full bg-slate-200 rounded-lg h-[395px] max-2xl:h-[345px] overflow-hidden border-3 border-gray-300'>
                            <div>
                                <img className="w-full p-1 h-[300px] max-[500px]:h-40 object-cover cover rounded-t-lg" src={d.images[0]} alt={d.title}/>
                            </div>
                            <div className="p-5 max-w-[600px] w-full">
                                <h1 className="name text-xl font-semibold">{d.title}</h1>
                                <p>{d.description}</p>
                                <h2  className="price font-bold text-orange-500 text-2xl">{d.price}</h2>
                                <div className="items-center justify-between flex pt-2 pr-10">
                                    <a href="./booking.html" className="text-white text-xl p-1 bg-blue-500 rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">Sotib olish</a>
                                    <button className=" w-10 h-10 rounded-full border border-blue-600 cursor-pointer hover:scale-105 transition-all"><i className="fa fas fa-shopping-basket text-blue-700 "></i></button>
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
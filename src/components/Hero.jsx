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
  return (
    <div className='container mx-auto flex justify-between items-center px-20 mt-10'>
        <section className="rounded-3xl bg-gray-100 px-10 py-4 w-[400px]">
            <h2 className="text-2xl font-semibold pb-4">Kategoriyalar:</h2>
            <ul className=" *:py-2 *:px-4 *:bg-slate-300 *:rounded-xl *:my-2 *:cursor-pointer *:hover:bg-slate-400 *:hover:scale-105 *:transition-all ">
                <li className=""><button>Elektrotexnika</button></li>
                <li><button>Uy ro'zg'or buyumlari</button></li>
                <li><button>Aksasuarlar</button></li>
                <li><button>Kiyimlar</button></li>
                <li><button>Hobby va ijod</button></li>
                <li><button>Chorva uchun tavarlar</button></li>
            </ul>
        </section>
        <section className="bg-slate-300 p-1 flex justify-between items-center  rounded-xl w-4xl h-[400px]">

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
                        <div className='flex items-center shadow-2xl w-full bg-slate-200 rounded-lg h-[395px] overflow-hidden border-3 border-gray-300'>
                            <div>
                                <img className="w-full p-1 h-[300px] object-cover cover rounded-t-lg" src={d.images[0]} alt={d.title}/>
                            </div>
                            <div className="p-5 max-w-[600px]">
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
  )
}

export default Hero
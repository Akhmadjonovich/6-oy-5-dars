
import React, { useEffect, useState } from 'react'
import axios from "axios"
function Products() {

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
    <>
    <div className='max-2xl:px-20 max-xl:px-10 max-lg:px-0 max-md:px-5  max-sm:px-4 mx-auto flex justify-center container'>
        <section className=''>
          
            <h2 className='text-2xl max-sm:text-xl ms:pl-5 font-semibold my-5'>Qurilmalar:</h2>
            <div className='grid gap-5 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 mx-auto justify-between space-y-10 max-sm:space-y-2 max-md:space-y-5'>
            {products.map((d) => (

            <div className=" shadow-2xl mx-auto max-sm:ml-[-3px] w-[300px] max-md:w-[105%] lg:w-full hover:scale-105 transition-all  bg-slate-200 rounded-lg h-[470px] max-md:h-[425px] overflow-hidden border-3 border-gray-300">
            <div>
                <img className="w-full  bg-center p-3 h-[300px]  max-2xl:h-[270px] max-xl:h-[260px] max-lg:h-[250px]  object-cover cover rounded-t-lg" src="/tel2-1.png" alt={d.title}/>
            </div>
            <div className="p-2 ">
                <h1 className="name text-lg font-bold">Tel model</h1>
                <ul className='text-sm font-semibold'>
                  <li>Xotira: 128 GB</li>
                  <li>Batareya: yaxshi</li>
                  <li>Yili: 2024</li>
                  <li className='text-orange-500'>Narxi: $200</li>
                </ul>
                <div className="items-center justify-between flex pt-2">
                    <a href="./booking.html" className="text-white text-lg py-0.5 px-1 bg-blue-500 rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">Aloqa</a>
                    <button className=" w-8 h-8 rounded-full border border-blue-600 cursor-pointer hover:scale-105 transition-all"><i class="fa fas fa-shopping-basket text-blue-700 "></i></button>
                </div>
            </div>
            </div>
                
            ))}

            

            </div>

            
        </section>

        {/* Elon berish */}
    </div>
    <div className='fixed z-30 bottom-10 right-10 bg-[#1E74C8] text-white px-5 py-2 lg:text-2xl rounded-tl-2xl rounded-br-xl font-semibold shadow-2xl hover:scale-105 transition-all' >
      <h3>E'lon berish</h3>
    </div>
    </>
  )
}

export default Products

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
    <div className='px-10 max-md:px-5 max-sm:px-4 mx-auto  container'>
        <section className=''>
            <h2 className='text-2xl max-sm:text-xl ms:pl-5 font-semibold my-5'>Maxsulotlar:</h2>
            <div className='grid gap-5 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 mx-auto justify-between space-y-10'>
            {products.map((d) => (

            <div className=" shadow-2xl mx-auto  w-[300px] max-md:w-full hover:scale-105 transition-all  bg-slate-200 rounded-lg h-[450px] overflow-hidden border-3 border-gray-300">
            <div>
                <img className="w-full p-1 h-[300px] object-cover cover rounded-t-lg" src={d.images[0]} alt={d.title}/>
            </div>
            <div className="p-2 ">
                <h1 className="name text-xl font-semibold">{d.title}</h1>
                <h2  className="price font-bold text-orange-500 text-2xl">{d.price}</h2>
                <div className="items-center justify-between flex pt-2">
                    <a href="./booking.html" className="text-white text-xl p-1 bg-blue-500 rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">Sotib olish</a>
                    <button className=" w-10 h-10 rounded-full border border-blue-600 cursor-pointer hover:scale-105 transition-all"><i class="fa fas fa-shopping-basket text-blue-700 "></i></button>
                </div>
            </div>
            </div>
                
            ))}

            

            </div>

            
        </section>
    </div>
  )
}

export default Products
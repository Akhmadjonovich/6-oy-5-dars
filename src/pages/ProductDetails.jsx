import React from 'react'
import { useParams } from 'react-router-dom'
import mockProducts from '../components/MockProducts'

const ProductDetails = () => {
  const {id} = useParams()
  let product = mockProducts.find((p) => p.id.toString() === id)
console.log(id);
  if(!product){
    return <div className="text-center mt-10 text-red-500">Mahsulot topilmadi!</div>
  }
  return (
    <><div className='flex mx-auto justify-between gap-5 pb-10 items-start mt-2 px-20 max-xl:px-10 max-sm:px-5 max-md:flex-col '>
      <div className='grid grid-cols-2 max-md:mx-auto '>
        <img src="/tel2-1.png" alt={product.title} className=" max-md:w-full h-84 max-2xl:h-70 max-xl:h-60 max-lg:h-55 max-md:h-50 max-sm:h-40 object-contain rounded " />        
        <img src="/tel2-1.png" alt={product.title} className=" max-md:w-full h-84 max-2xl:h-70 max-xl:h-60 max-lg:h-55 max-md:h-50 max-sm:h-40 object-contain rounded " />        
        <img src="/tel2-1.png" alt={product.title} className=" max-md:w-full h-84 max-2xl:h-70 max-xl:h-60 max-lg:h-55 max-md:h-50 max-sm:h-40 object-contain rounded " />        
        <img src="/tel2-1.png" alt={product.title} className=" max-md:w-full h-84 max-2xl:h-70 max-xl:h-60 max-lg:h-55 max-md:h-50 max-sm:h-40 object-contain rounded " />        
      </div>
      <div className='pt-10 max-md:pt-0'>
        <h1 className='text-2xl font-bold pb-5 max-lg:text-xl'>{product.title}</h1>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Narxi:</strong> ${product.price}</p>
        <p><strong>RAM:</strong> {product.ram}</p>
        <p><strong>Xotira:</strong> {product.memory}</p>
        <p><strong>Yil:</strong> {product.year}</p>
        <p><strong>Tel:</strong> {product.phone}</p>
        <p><strong>Nickname:</strong> {product.nickname}</p>
        <p className="mt-4 text-gray-700"><strong>Tavsif:</strong> {product.description}</p>
        <p className="mt-2 text-red-600"><strong>Kamchiligi:</strong> {product.downside}</p>
      </div>
    </div>
    <div className='flex items-center justify-center pt-5 opacity-70'>
      <img src="/main-logo2.png" className='w-10 mx-[-7px] max-md:w-7 max-sm:w-5' alt="" />
      <p className='max-sm:text-[10px]'>xro <span className='text-blue-900'>Market</span> by Axrorbek Nematov</p>
    </div>    
    </>
  )
}

export default ProductDetails
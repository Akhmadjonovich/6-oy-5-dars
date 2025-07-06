import React, { useContext } from 'react'
import { SelectedContext } from '../context/SelectedContext'
import { Link } from 'react-router-dom'

const SelectedItems = () => {
    let {selectedItems} =useContext(SelectedContext)
  return (
    <div>
        <h1 className='text-2xl font-bold text-center max-lg:text-xl max-sm:text-lg'>Tanlangan Gatgetlar:</h1>
        {
            selectedItems.length === 0 ?(
              <p className='px-4 mt-50 text-center'>Hozircha hech narsa tanlanmagan</p>
            ):(
                <div className='grid grid-cols-4 pb-10 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4 px-20 max-xl:px-10 max-sm:px-5 pt-4'>
            {selectedItems.map(item => (
                <div key={item.id} className='relative border-2 h-90 border-gray-400 bg-gray-100 container p-3  rounded shadow-xl'>
                    <img src={item.thumbnail} alt={item.title} className="w-full h-[50%] object-contain mb-2" />
                    <h1 className="name text-lg font-bold">{item.title}</h1>
                    <ul className='text-sm font-semibold'>
                      <li>Xotira: {item.memory} GB</li>
                      <li>Brand: {item.brand} GB</li>
                      <li>Yili: {item.year}</li>
                      <li className='text-orange-500'>Narxi: ${item.price}</li>
                    <li><Link to={`/product/${item.id}`} ><button  className="text-white absolute mx-auto bottom-2 left-0 right-0 text-lg max-sm:text-sm py-0.5 w-[90%] px-1 bg-[#1E74C8] rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">Batafsil</button></Link></li>
                    </ul>
                </div>
            ))}
        </div>
            )

        }
        
    </div>
  )
}

export default SelectedItems
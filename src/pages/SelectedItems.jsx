import React, { useContext } from 'react'
import { SelectedContext } from '../context/SelectedContext'

const SelectedItems = () => {
    let {selectedItems} =useContext(SelectedContext)
  return (
    <div>
        <h1 className='text-2xl font-bold text-center max-lg:text-xl max-sm:text-lg'>Tanlangan Gatgetlar:</h1>
        {
            selectedItems.length === 0 ?(
                <p className='px-4 mt-50 text-center'>Hozircha hech narsa tanlanmagan</p>
            ):(
                <div className='grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4 px-20 max-xl:px-10 max-sm:px-5 pt-4'>
            {selectedItems.map(item => (
                <div key={item.id} className='border-2 h-100 border-gray-400 bg-gray-100 container p-3  rounded shadow-xl'>
                    <img src="/tel2-1.png" alt={item.title} className="w-full h-[70%] object-cover mb-2" />
                    <h1 className="name text-lg font-bold">Tel model</h1>
                    <ul className='text-sm font-semibold'>
                      <li>Xotira: 128 GB</li>
                      <li>Batareya: yaxshi</li>
                      <li>Yili: 2024</li>
                      <li className='text-orange-500'>Narxi: $200</li>
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
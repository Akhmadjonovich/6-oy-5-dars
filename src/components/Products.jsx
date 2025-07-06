import React, { useContext, useEffect, useState } from 'react'
import { SelectedContext } from '../context/SelectedContext';
import { Link } from 'react-router-dom';
import ElonModel from '../pages/ElonModel';

function Products({ selectedBrand, setSelectedBrand, products, searchTerm }) {
  const { selectedItems, toggleSelect } = useContext(SelectedContext);

  const filteredProducts = products.filter((p) => {
    const brandMatch = selectedBrand
      ? p.brand?.toLowerCase() === selectedBrand.toLowerCase()
      : true;

    const searchMatch = p.title?.toLowerCase().includes(searchTerm?.toLowerCase() || '');

    return brandMatch && searchMatch;
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className='mx-auto flex justify-center container'>
        <section className='px-20 max-xl:px-10  max-md:px-5  max-sm:px-4 mx-auto'>
          <h2 className='text-2xl max-sm:text-xl ms:pl-5 font-semibold my-5'>Qurilmalar:</h2>
          <div className='grid w-full gap-5 pb-5 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 mx-auto justify-between space-y-10 max-sm:space-y-2 max-md:space-y-5'>
            {filteredProducts.length === 0 ? (
              
              <p className='text-center mx-auto px-20'>Bunday qurilma topilmadi...</p>
            ) : (
              filteredProducts.map((d) => {
                {console.log(d.thumbnail)}
                
                const isSelected = selectedItems.find(i => i.id === d.id);
                return (
                  <div key={d.id} className="relative shadow-2xl mx-auto max-sm:ml-[-3px] w-full hover:scale-105 transition-all bg-slate-200 rounded-lg 2xl:h-[470px] h-[440px] max-md:h-[420px] max-sm:h-[340px] overflow-hidden border-3 border-gray-300">
                    <div>
                      <img className="w-full bg-center p-3 h-[300px] max-2xl:h-[270px] max-xl:h-[250px] max-lg:h-[250px] max-sm:h-[150px] object-contain cover rounded-t-lg" src={d.thumbnail} alt={d.title} />
                    </div>
                    <div className="p-2">
                      <h1 className="name text-lg font-bold max-sm:text-[16px]">{d.title}</h1>
                      <ul className='text-sm font-semibold'>
                        <li>Xotira: {d.memory}</li>
                        <li>Ram: {d.ram}</li>
                        <li>Yili: {d.year}</li>
                        <li className='text-orange-500'>Narxi: ${d.price}</li>
                      </ul>
                      <div className="items-center justify-between flex pt-2">
                        <Link to={`/product/${d.id}`}>
                          <button className="text-white absolute bottom-2 left-2 text-lg py-0.5 px-1 bg-blue-500 rounded-lg cursor-pointer border border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">
                            Batafsil
                          </button>
                        </Link>
                        <button
                          onClick={() => toggleSelect(d)}
                          className={` ${isSelected ? 'bg-blue-300' : 'bg-transparent'} w-8 h-8 absolute bottom-2 right-2 rounded-full border border-blue-600 cursor-pointer hover:scale-105 transition-all`}
                        >
                          <i className="fa fas fa-shopping-basket text-blue-700"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>

      {isOpenModal && (
        <ElonModel isOpenModel={isOpenModal} setIsOpenModel={setIsOpenModal} />
      )}

      <button
        onClick={() => setIsOpenModal(!isOpenModal)}
        className='fixed z-30 bottom-10 right-10 bg-[#1E74C8] text-white px-5 py-2 lg:text-2xl rounded-tl-2xl rounded-br-xl font-semibold shadow-2xl hover:scale-105 transition-all'
      >
        <h3>E'lon berish</h3>
      </button>
    </>
  );
}

export default Products;

            


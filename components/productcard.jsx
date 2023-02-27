import React from 'react'
import { useStateContext } from '@/context/StateContext'

const Productcard = () => {

    const { productData, isChecked, handlecheck } = useStateContext();

    const hand = () => { }

    return (
        <div className='p-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {productData?.map((item, idx) =>
                <div key={idx} className='border-2 border-black rounded-lg p-3 pb-10 hover:bg-red-600' onClick={() => handlecheck(idx)}>
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={isChecked && isChecked[idx]} onChange={hand} />
                    <div className='flex flex-col items-center font-semibold text-lg'>
                        <h1>{item?.sku}</h1>
                        <h1>{item?.name}</h1>
                        <h1>{item?.price} $</h1>
                        <h1>{item?.productDesc}</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Productcard
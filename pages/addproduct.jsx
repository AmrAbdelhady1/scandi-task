import React from 'react'
import Link from 'next/link'
import { Productdetails } from '@/components'

const Addproduct = () => {
  return (
    <div>

      <div className="flex justify-between px-4 md:px-10 pt-10 pb-5 items-center text-red-500 border-b-2 border-black">
        <h1 className="md:text-3xl font-bold uppercase">Product add</h1>
        <Link href='/' className="flex gap-4 font-semibold md:text-xl">
          <button className="md:py-3 md:px-8 py-1 px-2 rounded-full border-2 border-red-500 hover:text-white hover:bg-red-500 hover:underline">Cancel</button>
        </Link>
      </div>

      <Productdetails />

    </div>
  )
}

export default Addproduct
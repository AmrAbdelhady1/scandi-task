import { Productcard } from "@/components";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

export default function Home() {

  const {deleteUser} = useStateContext();

  return (
    <body className="min-h-screen">
      <div className="flex justify-between px-2 md:px-10 pt-10 pb-5 items-center text-red-500 border-b-2 border-black">
        <h1 className="md:text-3xl font-bold uppercase">Product List</h1>
        <div className="flex gap-4 font-semibold text-xs md:text-xl">
          <Link href='/addproduct'>
            <button className="md:py-3 py-1 px-2 md:px-8 rounded-full border-2 border-red-500 hover:text-white hover:bg-red-500 hover:underline">ADD</button>
          </Link>
          <button className="md:py-3 py-1 px-2 md:px-8 rounded-full border-2 border-red-500 hover:text-white hover:bg-red-500 hover:underline" onClick={deleteUser}>Mass Delete</button>
        </div>
      </div>

      <Productcard />

    </body>
  )
}

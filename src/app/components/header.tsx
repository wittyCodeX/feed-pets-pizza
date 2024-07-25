import React from 'react'
import Image from "next/image";
import Link from 'next/link'

function Header() {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
            <Link href="/">
                <Image
                src="/logo.svg"
                alt="Pizza Pets Logo"
                width={150}
                height={150}
                priority
                />
            </Link>

            <button className='flex items-center justify-center gap-x-4 py-3 px-4 text-white text-[18px] h-[48px] min-w-[178px] border-4 border-black ring-4 ring-white hover:scale-105 duration-200 cursor-pointer'>connect wallet</button>
        </div>
    </div>
  )
}

export default Header
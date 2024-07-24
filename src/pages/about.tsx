import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/main-logo.png';
import Link from 'next/link';

function about() {
  return (
    <div>
    <MainLayout>
      <section className='w-full h-[316px] mx-auto text-center' >
        <div className="container mx-auto">
          <div className="checkOut h-[316px] flex items-center flex-col justify-center">
            <Image className='mx-auto' src={logo} alt="img" />
            <h1 className='font-poppins text-4xl font-bold leading-[52px]'>About</h1>
            <p className='font-poppins text-xl font-bold leading-6 '>Home{`>`}<span className='font-light text-base'>About</span></p>
          </div>
        </div>
      </section>
    </MainLayout>
    <Link href={'/blog'} className='my-24 block container mx-auto border rounded-lg text-xl py-4 text-center'>There is no about page yet, you can see the blog page</Link>
    </div>
  )
}

export default about
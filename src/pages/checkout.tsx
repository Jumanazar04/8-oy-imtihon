import React from 'react';
import Image from 'next/image';
import logo from '@/assets/main-logo.png';
import MainLayout from '@/components/MainLayout';

const About: React.FC = () => {
  return (
    <>
    <MainLayout>
      <section className='w-full h-[316px] mx-auto text-center' >
        <div className="container mx-auto">
          <div className="checkOut h-[316px] flex items-center flex-col justify-center">
            <Image className='mx-auto' src={logo} alt="img" />
            <h1 className='font-poppins text-4xl font-bold leading-[52px]'>Checkout</h1>
            <p className='font-poppins text-xl font-bold leading-6 '>Home{`>`}<span className='font-light text-base'>Checkout</span></p>
          </div>
        </div>
      </section>
    </MainLayout>
      <section className='container mx-auto px-10'>
        <div className="detailes flex">
          <div className="detail1 flex flex-col w-1/2">
            <h2 className='text-3xl font-bold my-8'>Billing Details</h2>
            <form action="#" className='flex flex-col gap-7'>
              <div className="mainInput flex gap-5">
                <label htmlFor="firstName" className='flex flex-col'>
                  First Name <br />
                  <input type="text" className='w-[180px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
                </label>
                <label htmlFor="lastName" className='flex flex-col'>
                  Last Name <br />
                  <input type="text" className='w-[180px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
                </label>
              </div>
              <label htmlFor="companyName" className='flex flex-col'>
                Company Name <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="country" className='flex flex-col'>
                Country/Region <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="streetAddress" className='flex flex-col'>
                Street Address <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="town" className='flex flex-col'>
                Town/City <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="province" className='flex flex-col'>
                Province <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="zipCode" className='flex flex-col'>
                ZIP Code <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="phone" className='flex flex-col'>
                Phone <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
              <label htmlFor="email" className='flex flex-col'>
                Email Address <br />
                <input type="text" className='w-[400px] h-14 border border-gray-400 rounded-lg p-2 mt-2 text-base' />
              </label>
            </form>
          </div>
          <div className="detail2 w-1/2">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

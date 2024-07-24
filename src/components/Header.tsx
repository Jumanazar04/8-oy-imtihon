import { Product } from '@/pages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import carusel1 from '../assets/Rectangle 24.png'
import carusel2 from '../assets/Rectangle 25.png'

interface Category {
  image: string;
  name: string;
  __v: number;
  _id: string;
}

interface HeaderProps {
  categories: Category[];
  products: Product[];
}



const Header: React.FC<HeaderProps> = ({ categories, products }) => {
    const newCategories = categories.slice(0,3)
    console.log(products);
    
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-end pr-28">
        <div className="flex flex-col gap-3 p-9 bg-[#FFF3E3] rounded-xl w-[623px]">
          <span className="tracking-[.3em]">New Arrival</span>
          <h1 className="text-[#B88E2F] text-[52px] leading-none font-bold">
            Discover Our <br />
            New Collection
          </h1>
          <p className="font-medium mb-10 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-1/3 bg-[#B88E2F] p-5 text-white">BUY NOW</button>
        </div>
      </header>
      <main>
        <section>
          <div className="container mx-auto text-center my-12">
            <h1 className="text-3xl font-bold">Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {newCategories.map((category) => (
                <div key={category._id} className="bg-white shadow-md rounded p-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={400}
                    className='h-5/6 mb-10'
                  />
                  <h2 className="mt-2 font-bold">{category.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
            <div className='container mx-auto text-center'>
              <h2 className='text-center text-3xl font-bold mt-16 mb-8'>Our products</h2>
              <div className="container mx-auto text-center my-12">
                <div className="flex flex-wrap justify-center gap-14">
                    {products.map((product) => (
                    <Link href={`/singleProduct/${product._id}`} key={product._id} className="bg-slate-100 text-left shadow-md rounded p-4 w-[285px]">
                        <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full h-48 object-cover rounded-t"
                        />
                        <h2 className="mt-2 font-bold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
                    </Link>
                    ))}
                </div>
              </div>
              <Link href={'/shop'} className='my-12 px-8 text-center mx-auto py-4 border border-[#B88E2F] text-[#B88E2F]' >Show more</Link>
            </div>
        </section>
        <section>
          <div className='container mx-auto flex gap-32 my-24 px-12 items-center'>
              <div className='w-1/3 flex flex-col gap-4 justify-start items-start '>
                  <h2 className='text-4xl font-extrabold'>
                  50+ Beautiful rooms 
                  inspiration
                  </h2>
                  <h3 className='text-[#616161]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h3>
                  <Link className='px-7 py-4 bg-[#B88E2F] text-white' href={'/'}>
                    Explore More
                  </Link>
              </div>
              <div className='w-2/3 h-[450px] flex gap-12'>
                  <Image className='h-[450px]' src={carusel1} alt='ok'/>
                  <Image className='h-[350px]' src={carusel2} alt='ok'/>
              </div>
          </div>  
        </section>
      </main>
    </div>
  );
};

export default Header;

import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Product } from '.'
import { GetStaticProps } from 'next'
import logo from '@/assets/main-logo.png'



export const getStaticProps: GetStaticProps = async () => {
  try {
    const productsRes = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products')

    const products:  Product[] = await ( productsRes.json());

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [],
        products: [],
      },
    };
  }
};

interface ShopProps {
  products: Product[]
}

const shop:React.FC<ShopProps> = ({products})=> {
  return (
    <div>
    <MainLayout>
      <div className='flex justify-center items-center flex-col h-[316px]'>  
      <Image className='' src={logo} alt="img" />
        <h1 className='text-3xl font-bold my-4'>Shop</h1>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>Home{`>`}</h2>
          <h3>Shop</h3>
        </div>
      </div>
    </MainLayout>
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
            </div>
    </div>
  )
}

export default shop
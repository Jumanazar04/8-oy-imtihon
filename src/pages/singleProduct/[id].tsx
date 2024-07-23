import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { Product } from '@/pages/index';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded p-8 gap-14 flex my-14">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          className="w-1/3 h-96 object-cover rounded-t"
        />
        <div>
            <h1 className="mt-4 text-4xl font-extrabold">{product.title}</h1>
            <p className="mt-2">{product.description}</p>
            <p className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)}</p>
            <div className='text-2xl font-bold mt-4'>
                Size:
                <p className='text-xl my-3'>{product.size}</p>
            </div>
            <div className='text-xl flex gap-3'>
                <button className='p-4 px-6 border rounded-lg'>- 1 +</button>
                <button className='p-4 px-6 border rounded-lg'>Add to Cart</button>
                <button className='p-4 px-6 border rounded-lg'>+ Compare</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
  const products: Product[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${params?.id}`);
  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;

import Header from "@/components/Header";
import { GetStaticProps } from 'next';
import React from 'react';

interface Category {
  image: string;
  name: string;
  __v: number;
  _id: string;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  size: string
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [categoriesRes, productsRes] = await Promise.all([
      fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories'),
      fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products'),
    ]);

    const [categories, products]: [Category[], Product[]] = await Promise.all([
      categoriesRes.json(),
      productsRes.json(),
    ]);

    return {
      props: {
        categories,
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

interface HomeProps {
  categories: Category[];
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ categories, products }) => {
  return (
    <main>
      <Header categories={categories} products={products}  />
    </main>
  );
};

export default Home;

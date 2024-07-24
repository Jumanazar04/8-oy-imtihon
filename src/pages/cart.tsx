'use-client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Redux Toolkit/store';
import { removeFromCart } from '@/Redux Toolkit/features/product/productSlice';
import Image from 'next/image';
import Link from 'next/link';
import { message } from 'antd';
import MainLayout from '@/components/MainLayout';
import logo from '@/assets/main-logo.png'
import { log } from 'console';

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
    message.success('Delete successfuly')
  };

  return (
    <div>
      <MainLayout>
        <div className='h-[316px] flex flex-col justify-center items-center gap-3'>
          <Image src={logo} alt='logo' /> 
          <h1 className='text-4xl font-bold'>Cart</h1>
          <div className='flex items-center'>
            <h2 className='text-2xl font-bold'>Home{`>`}</h2>
            <h3>Cart</h3>
          </div>
        </div>
      </MainLayout>
    <div className="container mx-auto px-12 my-10">
      <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded p-4 w-2/3 h-80 flex gap-6 items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="w-2/4 h-4/5 object-cover rounded"
              />
              <div className="flex-grow gap-2 flex flex-col">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
                <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="p-2 px-4 border rounded-lg bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <Link href="/">
            <Link href={'/'} className="mt-8 text-blue-500">Continue Shopping</Link>
          </Link>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;

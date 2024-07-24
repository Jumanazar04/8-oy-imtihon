import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';
import logo from '@/assets/main-logo.png'

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = form;
    if (name && email && subject && message) {
      router.push('/');
    } else {
      alert("Bazi maydonlar bo'sh");
    }
  };

  const { name, email, subject, message } = form;
  return (
    <div>
    <MainLayout>
      <section className=''>
        <div className="container flex flex-col items-center justify-center h-[316px] gap-3">
          <Image className='' src={logo} alt="img" />
          <h1 className='text-4xl font-bold'>Contact</h1>
          <p className='text-2xl font-bold'>Home{`>`}<span className='text-[16px] font-normal '>Contact</span></p>
        </div>
      </section>
    </MainLayout>
    <section className='container px-12 mx-auto'>
    <h2 className='touchTaxt text-center text-3xl font-bold mb-4 mt-8'>Get In Touch With Us</h2>
    <p className='touchTaxt1 text-center'> For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    <div className="touch flex justify-evenly my-16">
      <div className="touch1 flex flex-col gap-8">
        <div className="touchCard max-w-[212px]">
          <h4 className='text-2xl font-bold'>Address</h4>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        <div className="touchCard max-w-[212px]">
          <h4 className='text-2xl font-bold'>Phone</h4>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        <div className="touchCard max-w-[212px]">
          <h4 className='text-2xl font-bold'>Working Time</h4>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div className="touch2 ">
        <form action="#" className='flex flex-col gap-8'>
          <label className='text-xl font-bold' htmlFor="name"> Your Name <br />
            <input
              className='py-1 px-2 border rounded-lg w-[528px] mt-3'
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className='text-xl font-bold' htmlFor="email"> Email Address <br />
            <input
              className='py-1 px-2 border rounded-lg w-[528px] mt-3'
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className='text-xl font-bold' htmlFor="subject"> Subject <br />
            <input
              className='py-1 px-2 border rounded-lg w-[528px] mt-3'
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
            />
          </label>
          <label className='text-xl font-bold' htmlFor="message"> Message <br />
            <input 
              className='py-1 px-2 border rounded-lg w-[528px] mt-3'
              type="text" 
              name="message" 
              id="message"
              value={message}
              onChange={handleChange}
            />
          </label>
          <button className='py-4 bg-[#B88E2F] text-white' type='button' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  </section>
  </div>
  );
};

export default Contact;

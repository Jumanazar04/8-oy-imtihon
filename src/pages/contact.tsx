// pages/contact.tsx
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
      <section className=''>
        <div className="container">
          <Image className='mx-auto' src={''} alt="img" />
          <h1>Contact</h1>
          <p>Home <span>Contact</span></p>
        </div>
      </section>
      <section className='container'>
        <h2 className='touchTaxt text-3xl font-bold mb-4'>Get In Touch With Us</h2>
        <p className='touchTaxt1'> For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="touch">
          <div className="touch1">
            <div className="touchCard">
              <h4>Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="touchCard">
              <h4>Phone</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="touchCard">
              <h4>Working Time</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="touch2">
            <form action="#">
              <label htmlFor="name"> Your Name <br />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email"> Email Address <br />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="subject"> Subject <br />
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="message"> Message <br />
                <input 
                  type="text" 
                  name="message" 
                  id="message"
                  value={message}
                  onChange={handleChange}
                />
              </label>
              <button className='btn' type='button' onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

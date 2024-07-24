import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import logo from '../assets/main-logo.png'
import profile from '../assets/profile.png'
import search from '../assets/search.png'
import heart from '../assets/heart.png'
import korzina from '../assets/shopping.png'

interface Props {
  children: ReactNode;
}

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <nav className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={50} height={50} />
            <span className="text-4xl font-extrabold">Furniture</span>
          </div>
          <ul className="flex gap-24 text-xl font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="flex gap-10">
            <Link href="/profile">
              <Image src={profile} alt="profile" width={30} height={30} />
            </Link>
            <Link href="/search">
              <Image src={search} alt="profile" width={30} height={30} />
            </Link>
            <Link href="/heart">
              <Image src={heart} alt="profile" width={30} height={30} />
            </Link>
            <Link href="/cart">
              <Image src={korzina} alt="profile" width={30} height={30} />
            </Link>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="border">
                <div className="container mx-auto px-4">
                    <div className="my-20 flex justify-between footerCards">
                        <div className="footerLogo">
                            <h2>Furniro</h2>
                            <span>400 University Drive Suite 200 Coral Gables,<br />
                                FL 33134 USA</span>
                        </div>
                        <div className="footerLinks">
                            <span>Links</span>
                            <Link className='footerLink' href={"/"}>Home</Link>
                            <Link className='footerLink' href={"/shop"}>Shop</Link>
                            <Link className='footerLink' href={"/about"}>About</Link>
                            <Link className='footerLink' href={"/contact"}>Contact</Link>
                        </div>
                        <div className="footerHelp">
                            <span>Help</span>
                            <p>Returns</p>
                            <p>Pravicy Policy</p>
                            <p>Payment Options</p>
                        </div>
                        <div className="footerNewsLetter">
                            <span>NewsLetter</span><br />
                            <input type="text" placeholder='Enter your email...'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
      </footer>
    </div>
  );
};

export default GeneralLayout;

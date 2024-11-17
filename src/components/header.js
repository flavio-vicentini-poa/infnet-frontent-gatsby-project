import React from "react";
import { Link } from "gatsby";

export default function Header(props) {
  return (
    <nav className='flex items-center justify-between bg-custom-secondary p-4'>
      <div className='text-custom-font-primary mr-6'>
        <span className='font-semibold text-sm md:text-xl tracking-tight'>
          <Link to='/'>{props.title}</Link>
        </span>
      </div>
      <div className='flex space-x-4'>
        <div className='text-sm flex-grow mt-2'>
          <Link
            to='/'
            className='inline-block mt-0 text-custom-font-primary hover:text-white mr-4 text-sm md:text-lg'
          >
            Home
          </Link>
          <Link
            to='/noticias'
            className='inline-block mt-0 text-custom-font-primary hover:text-white mr-4 text-sm md:text-lg'
          >
            Notícias
          </Link>
          <Link
            to='/contato'
            className='inline-block mt-0 text-custom-font-primary hover:text-white mr-4 text-sm md:text-lg'
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

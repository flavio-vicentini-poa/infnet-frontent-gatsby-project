import React from "react";

export default function Noticia({ data, children }) {
  return (
    <div className='bg-custom-third w-5/6 lg:flex lg:flex-row-reverse lg:justify-center border shadow-xl rounded-xl'>
      <div className='bg-custom-third p-6 flex flex-col justify-between leading-normal lg:border-r rounded-xl'>
        <div className='mb-8'>
          <span className='text-sm text-gray-600 flex items-center'>
            <img
              className='inline mr-1 w-10 h-10 mb-4'
              src={`/${data.mdx.frontmatter.tag}.svg`}
              alt={data.mdx.frontmatter.tag}
            />
          </span>
          <div className='text-gray-900 font-bold text-xl  mb-4'>
            {data.mdx.frontmatter.title}
          </div>
          <div className='text-gray-900 font-bold text-m  mb-4'>
            {data.mdx.frontmatter.subtitle}
          </div>
          <div className='text-gray-700 text-base'>{children}</div>
        </div>
        <div className='flex items-center'>
          <div className='text-sm'>
            <div className='text-gray-600 mb-2'>
              Publicada: {data.mdx.frontmatter.date}
            </div>
            <div className='text-gray-600'>
              Autor: {data.mdx.frontmatter.author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

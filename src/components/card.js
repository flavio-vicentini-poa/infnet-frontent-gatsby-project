import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Card({ news }) {
  return (
    <article key={news.id} className='hover:shadow-xl bg-custom-secondary'>
      <Link to={news.frontmatter.slug}>
        <div className='lg:min-h-full rounded overflow-hidden shadow-lg'>
          <GatsbyImage
            image={getImage(news.frontmatter.hero_image)}
            alt={news.frontmatter.title}
          />
          <div className='px-6 pt-4'>
            <div className='font-bold text-xl text-custom-font-primary'>
              {news.frontmatter.title}
            </div>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 text-xs font-semibold text-gray-700 mr-2 mb-2'>
              <img
                className='inline mr-1 w-6 h-6'
                src={`/${news.frontmatter.tag}.svg`}
                alt='Logo'
              />
              {news.frontmatter.tag}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

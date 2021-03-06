import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { BiCaretRight } from 'react-icons/bi'
import LazyLoad from 'react-lazyload';

const FeaturedCard = ({ image, published, link, title, excerpt, tags }) => {
  
  const publishDate = new Date(published)
  const [month, day, year] = [publishDate.toLocaleString('default', { month: 'long' }), publishDate.getDate(), publishDate.getFullYear()];
  
  return(
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg bg-gray-900">
      <GatsbyImage 
          image={getImage(image)}
          className="w-full md:w-1/2 rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          alt={title}
      />
      <div className="flex flex-col md:w-1/2">
      <h1 className="text-xl md:text-2xl text-gray-100 font-bold m-4 border-b border-blue-600">{title}</h1>
      <span className="text-gray-400 ml-4 leading-none -mt-2 mb-4 font-headers ml-2">{month} {day}, {year}</span>
            <p className="text-sm md:text-base mx-4 text-gray-100">{excerpt}</p>
            <div className="flex flex-row items-center flex-wrap m-2 md:mt-auto md:mx-4">
                {tags?.map((tag) => {
                    return <span className="portfolioTag">{tag}</span>
                })}
            </div>
            <Link 
                to={link}
                aria-label={title}
                className="flex flex-row items-center mr-auto text-base md:text-lg font-semibold cursor-pointer rounded-md shadow-md bg-gray-100 text-gray-900 px-3 py-2 hover:bg-gray-200 hover:shadow-lg m-4"
              >
                Read More
                <BiCaretRight className="ml-2 text-xl text-blue-700" />
              </Link>
      </div>
    </div>
  )
}

const BlogCard = ({ image, published, link, title, excerpt, tags }) => {

  const publishDate = new Date(published)
  const [month, day, year] = [publishDate.toLocaleString('default', { month: 'long' }), publishDate.getDate(), publishDate.getFullYear()];
  
    return(
        <div className="flex flex-col rounded-lg shadow-lg bg-gray-100 mb-4 md:my-2">
            <GatsbyImage 
                    image={getImage(image)}
                    className="h-52 rounded-t-lg w-full"
                    alt={title}
                />
            <h1 className="text-xl md:text-2xl font-bold m-2 border-b border-blue-600">{title}</h1>
            <span className="leading-none font-headers ml-2">{month} {day}, {year}</span>
            <p className="text-sm md:text-base m-2">{excerpt}</p>
            <div className="flex flex-row items-center flex-wrap m-2 md:mt-auto">
                {tags?.map((tag) => {
                    return <span className="portfolioTag">{tag}</span>
                })}
            </div>
            <LazyLoad className="mr-auto" offset={100}>
              <Link 
                  to={link}
                  aria-label={title}
                  className="flex flex-row items-center text-base md:text-lg font-semibold cursor-pointer rounded-md shadow-md bg-gray-900 text-gray-100 px-3 py-2 hover:bg-gray-800 hover:shadow-lg m-2"
                >
                  Read More
                  <BiCaretRight className="ml-2 text-xl text-blue-500" />
                </Link>
              </LazyLoad>
        </div>
    )
}

export { FeaturedCard, BlogCard }
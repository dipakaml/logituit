import React from 'react'


const MovieCard = ({title, image, year}) => {
  return (
    <div>
        <img src={image} alt={title}
        className='w-full h-72 object-cover'/>
        <div>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm text-gray-400' >{year}</p>
        </div>
    </div>
  )
}

export default MovieCard
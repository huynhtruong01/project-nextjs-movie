import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { w500Img } from '../../common'

MovieItem.propTypes = {}

function MovieItem({ movie, type }) {
  return (
    <div className="movie-item">
      <div className="movie-item__img">
        <img src={`${w500Img}${movie.poster_path}`} alt={movie.title} />
        <div className="movie-item__icon">
          <FaPlay />
        </div>
      </div>
      <p>{type === 'tv' ? movie.name : movie.title}</p>
    </div>
  )
}

export default MovieItem

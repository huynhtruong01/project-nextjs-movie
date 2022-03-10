import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { apiKey } from '../../configApi/apiKey'
import { originalImg } from '../../common'
import { useUserAuth } from '../../context/UserAuthContent'
import Image from 'next/image'

MovieInfo.propTypes = {}

function MovieInfo({ category = 'popular', title = '', desc = '' }) {
  const [movie, setMovie] = useState(null)
  const { user } = useUserAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
        )
        const data = await res.json()

        setMovie(data.results[0])
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [category])

  return (
    <div
      className="movie-info"
      style={{
        position: 'relative',
        backgroundImage: `url(${originalImg}${
          !movie ? '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg' : movie.backdrop_path
        })`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="wrapper__container">
        <div className="movie-info__container">
          <div className="movie-info__title">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="flex">
            <div className="movie-info__img">
              {!movie ? (
                ''
              ) : (
                <Image
                  src={`${originalImg}${movie.poster_path}`}
                  alt={movie.title}
                  width="300px"
                  height="450px"
                  loading="lazy"
                />
              )}
            </div>
            <div className="movie-info__content">
              {movie ? (
                <>
                  <h3>{movie.title}</h3>
                  <p className="movie-info__desc">{movie.overview}</p>
                  <div className="movie-info__info-list flex align-item-center">
                    <div className="flex">
                      <AiFillStar />
                      <span>{movie.vote_average} star</span>
                    </div>
                    <div className="flex">
                      <FaUserAlt />
                      <span>{movie.vote_count} views</span>
                    </div>
                  </div>
                  <Link href={user ? `/movies/${movie.id}` : '/login'} passHref={true}>
                    <div>
                      <button className="btn">Watch Now</button>
                    </div>
                  </Link>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo

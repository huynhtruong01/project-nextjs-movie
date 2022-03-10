import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { originalImg } from '../../../common/index'
import { apiKey } from '../../../configApi/apiKey'
import { useUserAuth } from '../../../context/UserAuthContent'
MainTopRating.propTypes = {}

function MainTopRating(props) {
  const [movieList, setMovieList] = useState([])
  const { user } = useUserAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        )

        const data = await res.json()
        setMovieList(data.results.slice(1, 6))
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [])

  return (
    <div className="main__top-rating">
      <div className="wrapper__container">
        <div className="top-rating__title">
          <h3>Top rating</h3>
          <Link href="/top-rated">View More</Link>
        </div>
        <div className="top-rating__movie-list">
          {movieList.length > 0
            ? movieList.map((movie) => (
                <div
                  key={movie.id}
                  className="top-rating__movie-item"
                  style={{
                    backgroundImage: `url(${originalImg}${movie.backdrop_path})`,
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="top-rating__play">
                    <Link href={user ? `/movies/${movie.id}` : '/login'} passHref={true}>
                      <BsPlayCircleFill />
                    </Link>
                  </div>
                  <div className="top-rating__content">
                    <div className="top-rating__review">
                      <div className="top-rating__rating">
                        <AiFillStar />
                        <span>{movie.vote_average} star</span>
                      </div>
                      <div className="top-rating__count">
                        <FaUserAlt />
                        <span>{movie.vote_count} views</span>
                      </div>
                    </div>
                    <h3>{movie.title}</h3>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}

export default MainTopRating

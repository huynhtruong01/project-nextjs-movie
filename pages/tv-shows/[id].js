import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { originalImg } from '../../common'
import CastList from '../../components/CastList'
import Head from 'next/head'
import VideoList from '../../components/VideoList'
import MovieList from '../../components/MovieList/MovieList'
import { apiKey } from '../../configApi/apiKey'

DetailMovie.propTypes = {}

function DetailMovie(props) {
  const { query } = useRouter()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${query.id}?api_key=${apiKey}&language=en-US`
        )

        const data = await res.json()

        console.log(data)
        setMovie(data)
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [query.id])

  console.log(movie)

  return (
    <>
      <Head>
        <title>{movie && movie.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="detail-movie">
        {Object.keys(movie).length > 0 ? (
          <>
            <div
              className="banner"
              style={{
                backgroundImage: `url(${originalImg}${movie.backdrop_path || movie.poster_path})`,
              }}
            ></div>
            <div
              className="mb-3 movie-content container"
              style={{
                marginBottom: '50px',
              }}
            >
              <div className="movie-content__poster">
                <div
                  className="movie-content__poster__img"
                  style={{
                    backgroundImage: `url(${originalImg}${
                      movie.poster_path || movie.backdrop_path
                    })`,
                  }}
                ></div>
              </div>
              <div className="movie-content__info">
                <h1 className="title">{movie.title || movie.name}</h1>
                <div className="genres">
                  {movie.genres &&
                    movie.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">
                        {genre.name}
                      </span>
                    ))}
                </div>
                <p className="overview">{movie.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={movie.id} type="tv" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList type="tv" id={movie.id} />
              </div>
              <div className="section mb-3">
                <MovieList category="similar" id={movie.id} type="tv" />
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default DetailMovie

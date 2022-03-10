import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from 'next/head'
import MovieItem from './MovieItem/MovieItem'
import { toCapitalize } from '../common'
import Loading from './Loading'
import { OutlineButton } from './Button/Button'
import { useUserAuth } from '../context/UserAuthContent'

MovieGridProps.propTypes = {}

function MovieGridProps({
  movieList = [],
  loading = false,
  totalPages = 0,
  page = 1,
  onChange = null,
  type = '',
  search = '',
  path = '',
}) {
  const { user } = useUserAuth()
  const handleLoadMore = () => {
    if (!onChange) return

    onChange(page + 1)
  }

  return (
    <>
      <Head>
        <title>Search: {search && toCapitalize(search)}</title>
      </Head>
      <div className="container bg-black p-110-0">
        <div className="movie-title p-0-14 mb-40">
          <h2 style={{ color: '#fff', fontSize: '2rem' }}>
            Search: <span>{search && toCapitalize(search)}</span>
          </h2>
        </div>
        <div className="movie-grid">
          {movieList.length > 0 &&
            movieList.map((movie, index) => (
              <Link href={user ? `/${path}/${movie.id}` : '/login'} key={index} passHref={true}>
                <div>
                  <MovieItem movie={movie} type="movie" />
                </div>
              </Link>
            ))}
        </div>
        {loading && <Loading />}
        {page < totalPages && !loading && (
          <div className="movie-grid__loadmore">
            <OutlineButton className="small" onClick={handleLoadMore}>
              Load more
            </OutlineButton>
          </div>
        )}
      </div>
    </>
  )
}

export default MovieGridProps

import React, { useEffect, useState } from 'react'
import { apiKey } from '../api/apiKey'
import { OutlineButton } from './Button/Button'
import Loading from './Loading'
import MovieItem from './MovieItem/MovieItem'
import Link from 'next/link'

MovieGrid.propTypes = {}

function MovieGrid({ type = '' }) {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&page=${page}`
        )

        const data = await res.json()

        setProductList((prev) => {
          return [...prev, ...data.results]
        })
        setTotalPages(data.total_pages)
      } catch (error) {
        console.log('Error: ', error)
      }

      setLoading(false)
    }

    getMovie()
  }, [page])

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <>
      <div className="movie-grid">
        {productList.length > 0
          ? productList.map((product) => (
              <Link
                href={`/${type === 'movie' ? 'movies' : 'tv-shows'}/${product.id}`}
                passHref={true}
                key={product.id}
              >
                <div>
                  <MovieItem movie={product} type={type} />
                </div>
              </Link>
            ))
          : ''}
      </div>
      {loading ? <Loading /> : ''}
      {loading || page > totalPages ? (
        ''
      ) : (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={handleLoadMore}>
            Load more
          </OutlineButton>
        </div>
      )}
    </>
  )
}

export default MovieGrid

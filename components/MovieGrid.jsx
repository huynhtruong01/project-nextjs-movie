import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { apiKey } from '../configApi/apiKey'
import { useUserAuth } from '../context/UserAuthContent'
import { OutlineButton } from './Button/Button'
import Input from './Input'
import Loading from './Loading'
import MovieItem from './MovieItem/MovieItem'

MovieGrid.propTypes = {}

function MovieGrid({ type = '', category = '' }) {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const { user } = useUserAuth()

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&page=${page}`
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
  }, [page, category, type])

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <div className="movie-grid">
        {productList.length > 0
          ? productList.map((product, index) => (
              <Link
                href={
                  user ? `/${type === 'movie' ? 'movies' : 'tv-shows'}/${product.id}` : '/login'
                }
                passHref={true}
                key={index}
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

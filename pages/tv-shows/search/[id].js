import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { apiKey } from '../../../configApi/apiKey'
import MovieGridProps from '../../../components/MovieGridProps'

SearchMovie.propTypes = {}

function SearchMovie(props) {
  const { query } = useRouter()
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query.id}&language=en-US&page=${page}&include_adult=false`
        )

        const data = await res.json()

        setMovieList((prev) => [...prev, ...data.results])
        setTotalPages(data.total_pages)
        console.log(data)
      } catch (error) {
        console.log('Error: ', error)
      }

      setLoading(false)
    })()
  }, [page, query?.id])

  const handleClick = (page) => {
    setPage(page)
  }

  return (
    <div className="search">
      <MovieGridProps
        movieList={movieList}
        loading={loading}
        totalPages={totalPages}
        page={page}
        type="tv"
        path="tv-shows"
        search={query.id}
        onChange={handleClick}
      />
    </div>
  )
}

export default SearchMovie

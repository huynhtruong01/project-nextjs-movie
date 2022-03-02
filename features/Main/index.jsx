import React from 'react'
import MainTopRating from './components/MainTopRating'
import MovieList from '../../components/MovieList/MovieList'

Main.propTypes = {}

function Main(props) {
  return (
    <main className="main">
      <MainTopRating />
      <MovieList />
    </main>
  )
}

export default Main

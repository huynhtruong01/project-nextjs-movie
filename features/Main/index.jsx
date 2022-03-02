import React from 'react'
import MainTopRating from './components/MainTopRating'
import MovieList from '../../components/MovieList/MovieList'
import MovieInfo from '../../components/MovieInfo/MovieInfo'

Main.propTypes = {}

function Main(props) {
  return (
    <main className="main">
      <MainTopRating />
      <MovieList category="similar" id="634649" type="movie" />
      <MovieInfo
        category="popular"
        title="The most watched movie"
        desc="This is the movie with the most viewers in 2022"
      />
      <MovieList category="similar" id="85552" type="tv" />
    </main>
  )
}

export default Main

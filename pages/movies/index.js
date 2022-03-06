import Head from 'next/head'
import React from 'react'
import MovieGrid from '../../components/MovieGrid'

Movie.propTypes = {}

function Movie() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="movies"
        style={{
          paddingTop: '100px',
          background: '#000',
        }}
      >
        <h3
          style={{
            textAlign: 'center',
            color: '#fff',
            background: '#000',
            padding: '40px 0',
            fontSize: '40px',
          }}
        >
          MOVIES
        </h3>
        <MovieGrid type="movie" />
      </div>
    </div>
  )
}

export default Movie

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../api/apiKey'
import { originalImg } from '../common'

CastList.propTypes = {}

function CastList({ id = 0, type = '' }) {
  const [castList, setCastList] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=en-US`
        )

        const data = await res.json()

        setCastList(data.cast.slice(0, 5))
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [id, type])

  return (
    <div className="casts">
      {castList.length > 0
        ? castList.map((cast) => (
            <div key={cast.id} className="casts-item">
              <div
                className="casts-item__img"
                style={{ backgroundImage: `url(${originalImg}${cast.profile_path})` }}
              ></div>
              <p className="casts-item__name">{cast.name}</p>
            </div>
          ))
        : ''}
    </div>
  )
}

export default CastList

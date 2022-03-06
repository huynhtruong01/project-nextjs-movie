import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../api/apiKey'

VideoList.propTypes = {}

function VideoList({ type = '', id = 0 }) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
        )
        const data = await res.json()
        setVideos(data.results)
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [id])

  console.log(videos)

  return <>{videos && videos.map((item, i) => <Video key={i} item={item} />)}</>
}

const Video = (props) => {
  const item = props.item

  const iframeRef = useRef(null)

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px'
    iframeRef.current.setAttribute('height', height)
  }, [])

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
        style={{
          borderRadius: '10px',
        }}
      ></iframe>
    </div>
  )
}

export default VideoList

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

SearchTV.propTypes = {}

function SearchTV(props) {
  const [value, setValue] = useState('')

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <div
        className="flex"
        style={{
          position: 'relative',
          width: '280px',
          height: '47px',
          marginBottom: '40px',
          marginLeft: '20px',
        }}
      >
        {/* <Input placeholder="Enter movie" onChange={handleChangeKeyword} value={keyword} /> */}
        <input
          type="text"
          placeholder="Enter TV shows"
          value={value}
          onChange={handleChangeValue}
          style={{
            width: '100%',
            height: '100%',
            padding: '10px',
            borderRadius: '7px',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        />
        <button
          style={{
            position: 'absolute',
            right: '7px',
            top: '7px',
            background: '#ff0000',
            color: '#fff',
            borderRadius: '7px',
          }}
        >
          <Link href={value ? `/tv-shows/search/${value}` : `/tv-shows`} passHref={true}>
            <span>Search</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SearchTV

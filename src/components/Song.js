import React from 'react'

const Song = ({song}) => {

  if(song.length === 0) {return null}

  return (
    <>
      <h2>lyrics of the song</h2>
      <p className="letra">
        {song}
      </p>
    </>
  )
}

export default Song

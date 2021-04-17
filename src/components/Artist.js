import React from 'react'

const Artist = ({artist}) => {
  console.log(artist)

  if(artist.length === 0) {return null}

  return (
    <>
      <h2>name of the artist</h2>
      <p className="letra">
        {artist.strArtist}
      </p>
    </>
  )
}

export default Artist

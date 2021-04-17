import React from 'react'

const Artist = ({artist}) => {
  if(Object.keys(artist).length === 0) return null

  const {strArtist, strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart} = artist

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light">
        Artist info:
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt={strArtist} />
        <p className="card-text">Genere: {strGenre}</p>
        <h2 className="card-text">Bio: </h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a href={`https://${ strFacebook }`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={`https://${ strTwitter }`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`${ strLastFMChart }`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Artist

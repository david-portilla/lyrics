import React, {useState} from 'react'

const Form = ({setSearchLyrics}) => {

  const [search, saveSearch] = useState({
    artist: '',
    song: ''
  })

  const [error, setError] = useState(false)

  const {artist, song} = search

  const updateState = e => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }
  const fetchAPI = (e) => {
    e.preventDefault()

    if(artist.trim() === '' || song.trim() === '') {
      setError(true)
      return
    }
    setError(false)
    setSearchLyrics(search)
  }

  return (
    <div className="bg-info">
      {error ? <p className="alert alert-danger text-center p-2">All fields are required</p> : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={fetchAPI}
          >
            <fieldset>
              <legend className="text-center">Lyrics Finder</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="artist">Artist</label>
                    <input
                      type="text"
                      name="artist"
                      id="artist"
                      className="form-control"
                      placeholder="Artist name"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="song">Song</label>
                    <input
                      type="text"
                      name="song"
                      id="song"
                      className="form-control"
                      placeholder="Song name"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

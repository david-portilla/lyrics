import React from 'react'

const Form = () => {
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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

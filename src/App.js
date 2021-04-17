import {useEffect, useState} from 'react';
import Form from './components/Form';
import axios from 'axios'
import Song from './components/Song';
import Artist from './components/Artist';

function App () {
  const [searchLyrics, setSearchLyrics] = useState({})
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0) return

    const getLyrics = async () => {
      const {artist, song} = searchLyrics
      const URL = `https://api.lyrics.ovh/v1/${ artist }/${ song }`
      const URL_ARTIST = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artist }`

      const [songInfo, artistInfo] = await Promise.all([
        axios(URL),
        axios(URL_ARTIST)
      ])

      songInfo.data.lyrics && setSong(songInfo.data.lyrics)
      artistInfo.data.artists && setArtist(artistInfo.data.artists[0])
    }
    getLyrics()
  }, [searchLyrics])


  return (
    <>
      <Form setSearchLyrics={setSearchLyrics}></Form>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist artist={artist} />
          </div>
          <div className="col-md-6">
            <Song song={song} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

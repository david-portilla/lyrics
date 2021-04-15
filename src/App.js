import {useEffect, useState} from 'react';
import Form from './components/Form';
import axios from 'axios'

function App () {
  const [searchLyrics, setSearchLyrics] = useState({})
  const [song, setSong] = useState('')

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0) return

    const getLyrics = async () => {
      const {artist, song} = searchLyrics
      const URL = `https://api.lyrics.ovh/v1/${ artist }/${ song }`
      const result = await axios(URL)
      result.data.lyrics && setSong(result.data.lyrics)
      console.log(song)
      console.log(result.data)
    }
    getLyrics()
  }, [searchLyrics])


  return (
    <>
      <Form setSearchLyrics={setSearchLyrics}></Form>
    </>
  );
}

export default App;

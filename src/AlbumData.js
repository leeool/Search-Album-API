// import Input from "./Input"
import axios from "axios"
const APIKey = "e47b8a8336f383a1f15857a5cac3a1cc"

const getMBIDUrl = (inputValue) => {
  return `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${inputValue}&api_key=${APIKey}&format=json`
}

const getDataUrl = (mbid) => {
  return `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${APIKey}&mbid=${mbid}&format=json`
}

const getApiMBID = async (inputValue) => {
  return await axios.get(getMBIDUrl(inputValue)).then((response) => {
    for (let i = 0; i <= 10; i++) {
      if (response.data.results.albummatches.album[i].mbid) {
        return response.data.results.albummatches.album[i].mbid
      }
      return alert("Nao foi possivel encontrar o album")
    }
  })
}

const getAlbumData = async (MBID) => {
  return await axios.get(getDataUrl(MBID)).then((reponse) => reponse.data.album)
}

export { getApiMBID, getAlbumData }

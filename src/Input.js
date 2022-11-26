import React from "react"
import Album from "./Album"
import { getApiMBID, getAlbumData } from "./AlbumData"

const Input = () => {
  const [inputValue, setInputValue] = React.useState("")

  const [imgSrc, setImageSrc] = React.useState("")
  const [albumName, setAlbumName] = React.useState("")
  const [artistName, setArtistName] = React.useState("")
  const [trackList, setTracks] = React.useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    const MBID = await getApiMBID(inputValue)
    const { artist, image, name, tracks } = await getAlbumData(MBID)

    setImageSrc(image[5]["#text"])
    setAlbumName(name)
    setArtistName(artist)
    setTracks(tracks.track)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Search Album</label>
        <input
          type="text"
          id="input"
          placeholder="album..."
          onChange={(event) =>
            setInputValue(event.target.value.split(" ").join("-").trim())
          }
        />
        <button>Submit</button>
      </form>
      <Album
        imgSrc={imgSrc}
        albumName={albumName}
        artistName={artistName}
        trackList={trackList}
      />
    </>
  )
}

export default Input

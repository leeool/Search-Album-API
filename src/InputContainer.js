import React from "react"
import Album from "./Album"
import { getApiMBID, getAlbumData } from "./AlbumData"
import {
  Button,
  DarkMode,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack
} from "@chakra-ui/react"

import { Search2Icon } from "@chakra-ui/icons"

const InputContainer = () => {
  const [inputValue, setInputValue] = React.useState("")

  const [imgSrc, setImageSrc] = React.useState("")
  const [albumName, setAlbumName] = React.useState("")
  const [artistName, setArtistName] = React.useState("")
  const [trackList, setTracks] = React.useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!inputValue) return
    const MBID = await getApiMBID(inputValue)
    console.log("🚀 => handleSubmit => getApiMBID", getApiMBID)
    const { artist, image, name, tracks } = await getAlbumData(MBID)

    setImageSrc(image[5]["#text"])
    setAlbumName(name)
    setArtistName(artist)
    setTracks(tracks.track)
  }

  return (
    <>
      <DarkMode>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="input" color={"gray.50"} fontSize="4xl">
                Search Album
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={<Search2Icon w={6} h={6} color="green.200" />}
                />
                <Input
                  variant="filled"
                  type="text"
                  id="input"
                  size="lg"
                  placeholder="album..."
                  color="white"
                  onChange={({ target }) => {
                    return setInputValue(
                      target.value.split(" ").join("-").trim()
                    )
                  }}
                />
              </InputGroup>
            </FormControl>
            <Button colorScheme="whatsapp" size="lg" type="submit" width="100%">
              Submit
            </Button>
          </Stack>
        </form>
        <Album
          imgSrc={imgSrc}
          albumName={albumName}
          artistName={artistName}
          trackList={trackList}
        />
      </DarkMode>
    </>
  )
}

export default InputContainer

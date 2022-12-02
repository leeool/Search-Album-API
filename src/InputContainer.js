import React from "react"
import Album from "./Album"
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
import axios from "axios"

const InputContainer = () => {
  const [input, setInput] = React.useState("")
  const [album, setAlbum] = React.useState("")
  const [cover, setCover] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const getAlbumID = (inputValue) => {
    return `https://musicbrainz.org/ws/2/release?query=${inputValue}&limit=1&fmt=json`
  }

  const getAlbumData = (id) => {
    return `https://musicbrainz.org/ws/2/release/${id}?inc=recordings+artists&fmt=json`
  }

  const getAlbumCover = (id) => `http://coverartarchive.org/release/${id}`

  const handleInput = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const albumID = await axios
      .get(getAlbumID(input))
      .then((response) => response.data.releases[0])

    const albumData = await axios
      .get(getAlbumData(albumID.id))
      .then((response) => response.data)
    console.log(albumData)

    const albumCover = await axios
      .get(getAlbumCover(albumData.id))
      .then((response) => response.data)
      .catch(() => setCover("./placeholder.svg"))

    setCover(albumCover)
    setAlbum(albumData)
    setLoading(false)
  }

  return (
    <>
      <DarkMode>
        {loading}
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
                  variant="outline"
                  type="text"
                  id="input"
                  size="lg"
                  placeholder="album..."
                  color="white"
                  bg="blackAlpha.300"
                  autoComplete="off"
                  value={input}
                  onChange={handleInput}
                />
              </InputGroup>
            </FormControl>
            <Button colorScheme="whatsapp" size="lg" type="submit" width="100%">
              Submit
            </Button>
          </Stack>
        </form>
        <Album
          nomeAlbum={(album && album.title) || "..."}
          nomeBanda={(album && album["artist-credit"][0].name) || "..."}
          cover={(cover && cover.images[0].image) || "./placeholder.svg"}
          tracks={(album && album.media[0].tracks) || []}
          loading={loading}
        />
      </DarkMode>
    </>
  )
}

export default InputContainer

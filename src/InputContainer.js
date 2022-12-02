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
  const [input, setInput] = React.useState(null)
  const [album, setAlbum] = React.useState(null)
  const [nomeAlbum, setNomeAlbum] = React.useState("...")
  const [nomeBanda, setNomeBanda] = React.useState("...")

  const getArtistID = (inputValue) => {
    return `https://musicbrainz.org/ws/2/artist?query=${inputValue}&limit=1&fmt=json`
  }

  const getAlbuns = (id) => {
    return `https://musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
  }

  const handleInput = ({ target }) => {
    setInput(target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios
      .get(getArtistID(input))
      .then((response) => {
        const ID = response.data.artists[0].id
        return axios.get(getAlbuns(ID))
      })
      .then((response) => setAlbum(response.data))
  }

  React.useEffect(() => {
    if (!album) return
    setNomeAlbum(album["release-groups"][0].title)
    console.log(album)
    setNomeBanda(album.name)
  }, [album])

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
                  variant="outline"
                  type="text"
                  id="input"
                  size="lg"
                  placeholder="album..."
                  color="white"
                  bg="blackAlpha.300"
                  autoComplete="off"
                  onChange={handleInput}
                />
              </InputGroup>
            </FormControl>
            <Button colorScheme="whatsapp" size="lg" type="submit" width="100%">
              Submit
            </Button>
          </Stack>
        </form>
        <Album nomeAlbum={nomeAlbum} nomeBanda={nomeBanda} />
      </DarkMode>
    </>
  )
}

export default InputContainer

import { Card, CardBody, Heading, OrderedList, Stack } from "@chakra-ui/react"
import React from "react"
import axios from "axios"
import { GlobalContext } from "./GlobalContext"

const Album = ({ nomeAlbum, nomeBanda, cover }) => {
  const global = React.useContext(GlobalContext)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px"
      }}
    >
      <Card size={"md"} bg="blackAlpha.300">
        <CardBody>
          <img alt="aaaa" src={"./placeholder.svg"} />
          <Stack spacing="1px" mt="15px">
            <Heading as="h1" size="xl" color="gray.50" className="album-name">
              {nomeAlbum}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="whiteAlpha.800"
              className="artist-name"
            >
              {nomeBanda}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
      <Card size="lg" bg="blackAlpha.300">
        <CardBody>
          <Heading size="xl" color="white">
            Tracks
          </Heading>
          <OrderedList></OrderedList>
        </CardBody>
      </Card>
    </div>
  )
}

export default Album

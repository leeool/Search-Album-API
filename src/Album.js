import {
  Card,
  CardBody,
  Heading,
  ListItem,
  OrderedList,
  Stack
} from "@chakra-ui/react"
import React from "react"

const Album = ({ imgSrc, albumName, artistName, trackList }) => {
  const tracksNames = []

  if (trackList) {
    for (let i = 0; i < Object.keys(trackList).length; i++) {
      tracksNames.push(`${trackList[i].name}`)
    }
  }

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
          <img alt="aaaa" src={imgSrc || "./placeholder.svg"} />
          <Stack spacing="1px" mt="15px">
            <Heading as="h1" size="xl" color="gray.50" className="album-name">
              {albumName || "..."}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="whiteAlpha.800"
              className="artist-name"
            >
              {artistName || "..."}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
      <Card size="lg" bg="blackAlpha.300">
        <CardBody>
          <Heading size="xl" color="white">
            Tracks
          </Heading>
          <OrderedList>
            {tracksNames.map((track) => (
              <ListItem
                key={track.slice(0, 5)}
                color="whiteAlpha.900"
                fontSize="xl"
                marginTop="8px"
              >
                {track}
              </ListItem>
            ))}
          </OrderedList>
        </CardBody>
      </Card>
    </div>
  )
}

export default Album

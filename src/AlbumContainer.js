import {
  Card,
  CardBody,
  Heading,
  OrderedList,
  Stack,
  ListItem,
  Skeleton
} from "@chakra-ui/react"
import React from "react"

const Album = ({ nomeAlbum, nomeBanda, cover, tracks, loading }) => {
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
          {loading ? (
            <Skeleton
              width="31.5rem"
              height="31.5rem"
              startColor="whiteAlpha.200"
              endColor="whiteAlpha.300"
            ></Skeleton>
          ) : (
            <img alt="" src={cover} />
          )}
          <Stack spacing="8px" mt="15px">
            <Heading as="h1" size="xl" color="gray.50" className="album-name">
              {loading ? (
                <Skeleton
                  width="100%"
                  height="3rem"
                  startColor="whiteAlpha.200"
                  endColor="whiteAlpha.300"
                ></Skeleton>
              ) : (
                nomeAlbum
              )}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="whiteAlpha.800"
              className="artist-name"
            >
              {loading ? (
                <Skeleton
                  width="100%"
                  height="2rem"
                  startColor="whiteAlpha.200"
                  endColor="whiteAlpha.300"
                ></Skeleton>
              ) : (
                nomeBanda
              )}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
      <Card size="lg" bg="blackAlpha.300">
        <CardBody>
          <Heading size="xl" color="white">
            Tracks
          </Heading>
          {loading ? (
            <Skeleton
              width="100%"
              height="30rem"
              startColor="whiteAlpha.200"
              endColor="whiteAlpha.300"
            ></Skeleton>
          ) : (
            <OrderedList>
              {tracks.map(({ title }) => {
                return (
                  <ListItem
                    key={title}
                    color="whiteAlpha.900"
                    fontSize="xl"
                    marginTop="8px"
                  >
                    {title}
                  </ListItem>
                )
              })}
            </OrderedList>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default Album

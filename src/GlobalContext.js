import React from "react"

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const getArtistID = (inputValue) => {
    return `https://musicbrainz.org/ws/2/artist?query=${inputValue}&limit=1&fmt=json`
  }

  const getAlbuns = (id) => {
    return `https://musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`
  }

  return <GlobalContext.Provider value>{children}</GlobalContext.Provider>
}

import React from "react"

const Album = ({ imgSrc, albumName, artistName, trackList }) => {
  const tracksNames = []

  if (trackList) {
    for (let i = 0; i < Object.keys(trackList).length; i++) {
      tracksNames.push(trackList[i].name)
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "12px"
      }}
    >
      <div>
        <img alt="aaaa" src={imgSrc || "./placeholder.svg"} />
        <p className="album-name">{albumName || "..."}</p>
        <p className="artist-name">{artistName || "..."}</p>
      </div>
      <div className="container-tracks">
        <p className="tracks">Tracks</p>
        {tracksNames.map((track) => (
          <li>{track}</li>
        ))}
      </div>
    </div>
  )
}

export default Album

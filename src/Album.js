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
        gridTemplateColumns: "1fr 1fr",
        gap: "12px"
      }}
    >
      <div>
        <img alt="aaaa" src={imgSrc || "./placeholder.svg"} />
        <p className="album-name">{albumName || "..."}</p>
        <p className="artist-name">{artistName || "..."}</p>
      </div>
      <div className="container-tracks">
        <p className="tracks-title">Tracks</p>
        {tracksNames.map((track) => (
          <li style={{ fontSize: "1.4rem" }} key={track.slice(0, 5)}>
            {track}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Album

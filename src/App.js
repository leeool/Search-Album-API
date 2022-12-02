import { Box } from "@chakra-ui/react"
import React from "react"
import "./css/style.css"
import InputContainer from "./InputContainer"
import Album from "./Album"
import { GlobalStorage } from "./GlobalContext"

function App() {
  return (
    <GlobalStorage>
      <Box bg={"#222"} className="container">
        <InputContainer />
      </Box>
    </GlobalStorage>
  )
}

export default App

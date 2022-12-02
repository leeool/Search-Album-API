import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, ColorModeScript, DarkMode } from "@chakra-ui/react"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={"dark"} />
    <DarkMode>
      <App />
    </DarkMode>
  </ChakraProvider>
)

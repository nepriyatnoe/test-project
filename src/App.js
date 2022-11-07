import React from "react"
import "./App.css"
import UploadBox from "./components/DropBox"
import TextBlocks from "./components/TextBlocks"



function App() {


  return (
    <div className="App">
      <div className="main-wrapper">
        <UploadBox />
        <TextBlocks />
      </div>
    </div>


  )
}

export default App

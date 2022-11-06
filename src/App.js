import React from "react"
import "./App.css"
import UploadBox from "./components/DropBox"
import MyForm2 from "./components/inputArea1"
import MyForm1 from "./components/inputArea2"


function App() {


  return (
    <div className="App">
      <div className="main-wrapper">
        <UploadBox />
        <div className="text-blocks">
          <MyForm1 />
          <MyForm2 />
        </div>
      </div>
    </div>


  )
}

export default App

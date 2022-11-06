import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import "./dropbox.css"


function UploadBox() {
  const [files, setFiles] = useState([])

  const [visibility, setVisibility] = useState({ visibility: 'visible' });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )


      changeVisibility();
    },

  })

  function changeVisibility() {
    setVisibility({ visibility: 'hidden' });
  }

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ maxWidth: "400px", maxHeight: "400px", alignSelf: 'center' }} alt="preview" />
      </div>
    </div>

  ))


  return (
    <div className="container">
      <div className="input-box">
        <div className="input-image">{images}</div>
        <div className="image-upload-button" style={visibility}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img src="https://img.icons8.com/pastel-glyph/64/null/upload--v1.png" className="upload-png" alt="upload image" />
            <p>PNG, JPEG files only</p>
          </div>
        </div>
      </div>

    </div>


  )
}

export default UploadBox;

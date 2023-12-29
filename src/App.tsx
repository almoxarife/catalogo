import React, { useEffect, useState } from 'react';
import logo from './bglogo.jpg';
import './App.css';
import * as fs from "fs";

function App() {
  const [file, setFile] = useState("")
  const readFile = (e: any) => {
    const csv = e.target.files[0]

    if (!csv) {
      return;
    }

    const fileReader = new FileReader()

    fileReader.readAsText(csv)
    fileReader.onload = () => {
      let lines = JSON.stringify(fileReader.result).replace(/["]+/g, "").split("\\r\\n").filter((item) => item.length !== 0)
      console.log(lines)
      setFile(JSON.stringify(fileReader.result))
    }
    fileReader.onerror = () => {
      console.log(fileReader.error)
    }
  }
  return (
    <div className="App">
      <input type="file" name="file" id='file' onChange={readFile} />
    </div>
  );
}

export default App;

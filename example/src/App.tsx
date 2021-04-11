import React from 'react'

import Rubi from "rubi-text"
import 'rubi-text/dist/index.css'

const App = () => {

  return (
    <>
      <div className="demo">
        <p>
          <Rubi text="Kernel" justify>Colonel</Rubi> Sanders was the <Rubi text="fir">1</Rubi>st president of the <Rubi text="United States" lowerSpacing attachAfter=".">US</Rubi>
        </p>
        <p>
          <Rubi text="Kernel" justify>Colonel</Rubi> Sanders was the <Rubi text="fir">1</Rubi>st president of the <Rubi text="United States" lowerCenter>U.S.</Rubi>
        </p>
      </div>
      <div className="demo2">
        <p>
          <Rubi text="Kernel" justify size="1rem" color="#FF0000">Colonel</Rubi> Sanders was the <Rubi text="fir" size="1rem" color="#275222">1</Rubi>st president of the <Rubi text="United States" color="#3703ef" lowerSpacing attachAfter="." size="1rem">US</Rubi>
        </p>
      </div>
      <div className="divider" />
      <div className="demo font">
        <p>
          <Rubi text="Kernel" justify>Colonel</Rubi> Sanders was the <Rubi text="fir">1</Rubi>st president of the <Rubi text="United States" lowerSpacing attachAfter=".">US</Rubi>
        </p>
        <p>
          <Rubi text="Kernel" justify>Colonel</Rubi> Sanders was the <Rubi text="fir">1</Rubi>st president of the <Rubi text="United States" lowerCenter>U.S.</Rubi>
        </p>
      </div>
      <div className="demo2 font">
        <p>
          <Rubi text="Kernel" justify size="1rem" color="#FF0000">Colonel</Rubi> Sanders was the <Rubi text="fir" size="1rem" color="#275222">1</Rubi>st president of the <Rubi text="United States" color="#3703ef" lowerSpacing attachAfter="." size="1rem">US</Rubi>
        </p>
      </div>

      <div className="divider" />

      <p>Built by <a href="https://twitter.com/NowNanoTV">NowNano</a></p>
      <p>Inspired by <a href="https://twitter.com/mabelandtee/status/1381043149125074946">@mabelandtee</a></p>
      <p>Check it out on <a href="https://github.com/Technopathic/rubi">Github</a></p>
      <p>More Info: <a href="https://en.wikipedia.org/wiki/Ruby_character">Rubi Characters</a></p>
    </>
  )
}

export default App

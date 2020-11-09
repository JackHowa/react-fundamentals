// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...otherProps}) => {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      // pass in otherprops to get children prop
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size={'small'} style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size={'medium'} style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size={'large'} style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App

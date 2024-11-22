import React from 'react'
import Meme from './component/Meme'

const App = () => {
  return (
    <div className='w-full bg-black h-screen'>
      <Meme url="https://api.imgflip.com/get_memes" />
    </div>
  )
}

export default App

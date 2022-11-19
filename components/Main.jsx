import React from 'react'
import Hero from './Hero'
import LiveChannels from './LiveChannels'
import IconBar from "./../components/IconBar"
import Categories from './Categories'

const Main = () => {
  return (
    <div className='py-4 px-4 w-full'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main
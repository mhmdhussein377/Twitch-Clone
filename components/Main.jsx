import React from 'react'
import Hero from './Hero'
import LiveChannels from './LiveChannels'
import IconBar from "./../components/IconBar"
import Categories from './Categories'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px] py-4 px-6 '>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main
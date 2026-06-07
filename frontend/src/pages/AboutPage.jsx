import React from 'react'
import { About } from '../components/About'

export const AboutPage = () => {
  return (
   <>
  <div
        className="min-h-screen bg-black 
bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
bg-[size:40px_40px] overflow-x-hidden"
    >
    {
        <About/>
    }
   </div>
   </>
  )
}

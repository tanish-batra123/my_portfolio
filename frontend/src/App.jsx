import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { SkillPage } from './pages/SkillPage'
import { ProjectPage } from './pages/ProjectPage'
import { ContactPage } from './pages/ContactPage'

export const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/skills' element={<SkillPage/>}></Route>
    <Route path='/projects' element={<ProjectPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}></Route>
   </Routes>
   </>
  )
}

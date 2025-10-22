import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Layout from './components/Layout'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import ViewStudent from './components/ViewStudent'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/create' element={<CreateStudent/>}/>
          <Route path='/edit/:id' element={<EditStudent/>}/>
          <Route path='/view/:id' element={<ViewStudent/>}/>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Layout from './componets/Layout/layout'
import Homepage from './componets/Home/homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
  
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route index element={<Homepage/>} />
  </Routes>
</BrowserRouter>

  )
}

export default App



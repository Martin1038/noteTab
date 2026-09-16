import React from 'react'
import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom'
import AddNotes from './Pages/AddNotes'
import DisplayNotes from './Pages/DisplayNotes'
import UpdateNotes from './Pages/UpdateNotes'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <h1>NoteApp</h1>
      <ul>
        <li><NavLink to="/">Add Notes</NavLink></li>
        <li><NavLink to="/display">Display Notes</NavLink></li>

      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<AddNotes/>}></Route>
      <Route path='/display' element={<DisplayNotes/>}></Route>
      <Route path='/edit/:id' element={<UpdateNotes/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
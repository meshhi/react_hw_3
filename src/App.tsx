import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Films from './components/Films/Films'
import Catalog from './components/Films/Catalog/Catalog'

function App() {
  const filmList = [
    {
      title: 'Star Wars: Episode I - The Phantom Menace',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      mark: 3,
    },
    {
      title: 'Star Wars: Episode II - The Phantom Menace',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod tempore eos expedita exercitationem, doloribus nemo?",
      mark: 1,
    },
    {
      title: 'Star Wars: Episode III - The Phantom Menace',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, porro."
    },
  ]

  return (
    <>
    <nav style={{height: "100px", display: "flex", justifyContent: "center", alignItems: 'center', gap: "1rem"}}>
      <Link to={"/films"}>Films</Link>
      <Link to={"/catalog"}>Catalog</Link>
    </nav>
    <Routes>
      <Route path='/films' element={<Films films={filmList}></Films>}></Route>
      <Route path='/catalog' element={<Catalog></Catalog>}></Route>
    </Routes>

    </>
  )
}

export default App

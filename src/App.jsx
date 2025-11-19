import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

{/*this is my comment */}
function App() {
  // useState hook for managing state
  const [count, setCount] = useState(0)

  return (
    // BrowserRouter wraps the whole app to enable routing
    <BrowserRouter>
      
      {/* Navigation bar using Bootstrap */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* Brand logo/title linking to homepage */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>

          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">read</Nav.Link>
            <Nav.Link href="/create">create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Define routes for different pages */}
      <Routes>
        {/* Route for home page → renders Content component */}
        <Route path='/' element={<Content></Content>}></Route>
        
        {/* Route for /read → renders Header component */}
        <Route path='/read' element={<Read />}></Route>
        
        {/* Route for /create → renders Footer component */}
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

// Export App component so it can be used in index.js or elsewhere
export default App
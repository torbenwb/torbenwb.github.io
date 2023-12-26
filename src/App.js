import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { SiteNav } from './components/SiteNav';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <SiteNav />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

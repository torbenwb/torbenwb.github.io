import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiteNav } from './components/SiteNav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useTheme } from '@emotion/react';
import { myTheme } from './theme';
import { Box, ThemeProvider } from '@mui/material';


function App() {
  const theme = myTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <SiteNav/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;

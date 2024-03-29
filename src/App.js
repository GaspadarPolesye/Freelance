import './styles/main.css'


import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Projects from './pages/projects';
import Contact from './pages/contact';
import ProjectOne from './pages/projectOne';

import ScrollToTop from './utility/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
<Navbar/>

<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='projects' element={<Projects/>}/>
  <Route path='/projectOne/:id' element={<ProjectOne/>}/>
  <Route path='/contacts' element={<Contact/>}/>
  
    
  
</Routes>

 

<Footer/>
</Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Request from './pages/Request';
import Gallery from './pages/gallery';
import Service from './pages/service';
import Why from './pages/why';
import RoadFreight from './pages/Roadfreight';
import Blog from './pages/Blog';
import Contact from './pages/contact';
import Footer from './components/footer';
import NotFound from './pages/Notfound';
import Company from './pages/company';
import BlogDetails from './components/blogdetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes className="content-wrap">
          <Route exact path='/' element={<Home />}/> 
          <Route  path='/services' element={<Service />}/>
          <Route  path='/road' element={<RoadFreight />}/>
          <Route  path='/air' element={<RoadFreight />}/>
          <Route  path='/ocean' element={<RoadFreight />}/>
          <Route  path='/company' element={<Company />}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/gallery' element={<Gallery />}/>
          <Route  path='/why' element={<Why />}/>
          <Route  path='/request' element={<Request />}/>
          <Route  path='/blog' element={<Blog />}/>
          <Route  path='/blogdetails/:id' element={<BlogDetails />}/>
          <Route  path='/contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;

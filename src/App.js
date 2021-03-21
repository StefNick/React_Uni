import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Layouts/HomeLayout/Home';
import Navbar from './components/Navbar';
import Projects from './components/Layouts/ProjectsLayout/Projects.jsx';
import Footer from './components/Layouts/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/contactUs' />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

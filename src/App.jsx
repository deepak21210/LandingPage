import './App.css';
import Hero from './components/Hero/Hero';
import Little_nav from './components/Navbar/Little_nav';

const App = () => {
  return (
    <div>
      <Little_nav className="nav"/>
      <Hero/>
    </div>
  )
}

export default App
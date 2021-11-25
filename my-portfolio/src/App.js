import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Project from './components/project/project.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

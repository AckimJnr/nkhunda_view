import logo from './logo.svg';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className='container d-block justify-content-center'>
      <Authentication />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
  <>
  <Navbar title = "TextUtils" aboutText= "About Text Utils"/>
  <div className="container my-3">
    <TextForm heading="Enter a text to analyses" /></div>
  
  </>
  )
}

export default App;

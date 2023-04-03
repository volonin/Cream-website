import './App.css';
import Main from './Main/Main'
import Footer from "./Footer/Footer";

function App(props) {
  return (
      <div className="App">
        <Main state={props.state.main}/>
        <Footer/>
      </div>
  );
}

export default App;

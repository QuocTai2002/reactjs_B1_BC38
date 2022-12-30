import logo from './logo.svg';
import './App.css';
import Header from './demoComponent/header';
import Banner from './demoComponent/banner';
import Footer from './demoComponent/footer';
import Itemp from './demoComponent/item';
function App() {
  return (
  
    <div className="App">
      {/* header */}
      <Header/>
      {/* banner */}
      <Banner/>
      {/* item */}
      <Itemp/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;

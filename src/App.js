import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="Card">
        <Header></Header>
        <Banner></Banner>
        <Produtos></Produtos>
        <Footer></Footer>
    </div>
  );
}

export default App;

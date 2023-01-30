
import './App.css';
import Featured from './component/Featured/Featured';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
// import Hero from './component/Hero/Hero';
import Investment from './component/Hero/Investment';
import MustRead from './component/MustRead/MustRead';
import Navbar from './component/Navbar/Navbar';
import Niveshartha from './component/Niveshartha/Niveshartha';
import Product from './component/Product/Product';
import Questions from './component/Questions/Questions';
import Review from './component/Review/Review';
import Unique from './component/Unique/Unique';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Featured />
      <Product />
      <Unique />
      <Niveshartha />
      <Investment />
      <Review />
      <Questions />
      <MustRead />
      <Footer />
    </div>
  );
}

export default App;

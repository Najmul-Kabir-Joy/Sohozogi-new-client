import './App.css';
import Home from './Pages/HomePage/Home';
import NewsPage from './Pages/NewsPage/NewsPage';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
      <NewsPage />
    </div>
  );
}

export default App;

import "./App.css";
import GlobalStyle from "./globalStyles";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className='App'>
			{/* <Router>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/" component={Home} />
        </Routes>
      </Router> */}
			<GlobalStyle />
			<Home />
			<About />
			<Work />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;

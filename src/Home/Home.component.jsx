import './../App.css';
import Nav from './..//Nav/nav.component'
import Section1 from './section1/start.component'
import Mid from './section2/mid.component'
import End from './section3/end.component'
import Footer from './../Footer/Footer'

function Home() {
  return (
    <div className="App">
        <Nav />
        <Section1 />
        <Mid />
        <End />
        <Footer />
    </div>
  );
} 

export default Home;

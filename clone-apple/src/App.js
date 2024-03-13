import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer/Footer';
import './Resources/css/bootstrap.css'
import './Resources/css/styles.css'
import Alert from './Components/Navigation/Alert';
import Firstsecond from './Components/Main/First&SecondSection/Firstsecond';
import Thirdfourth from './Components/Main/Third&FourthSection/Thirdfourth';
import Fifthsixth from './Components/Main/Fifth&SixthSection/Fifthsixth';


function App() {
  return (
    <>
    <Navbar/>
    <Alert/>
    <Firstsecond/>
    <Thirdfourth/>
    <Fifthsixth/>
    <Footer/>
    </>
  );
}

export default App;

import "./Home.css"
import Nav from "../../components/Nav/Nav";
import CallToAction from "../../components/CallToAction/CallToAction";
import Specials from "../../components/Specials/Specials";
import CustomersSay from "../../components/CustomersSay/CustomersSay";
import Chicago from "../../components/Chicago/Chicago";
import Footer from "../../components/Footer/Footer";



const Home = ()=>{
    return (
        <div>
          <Nav/>
          <CallToAction/>
          <Specials/>
          <CustomersSay/>
          <Chicago/>
          <Footer/>
        </div>
    )
}
export default Home;
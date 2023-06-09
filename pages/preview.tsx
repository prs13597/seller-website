import Home from "../components/Home/Home1";
import Header from "../components/Header/Header2";
import Promo from "../components/Promo/Promo2";
import Footer from "../components/Footer/Footer";

const summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
const Preview = () => {
  return (
    <div>
        <Header />
        <Home header="Samsung Pro's" summary={summary} primaryActionLabel="Deals for you" secondaryActionLabel="More Info "/>
        <Promo promoMainHeader="The right tools for your future"/>
        <Footer />
      </div>
  )
}

export default Preview

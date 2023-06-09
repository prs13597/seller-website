import Home from "../components/Home/Home1";
import Header from "../components/Header/Header2";
import Promo from "../components/Promo/Promo2";

const Preview = () => {
  return (
    <div>
        <Header />
        <Home header="Samsung Pro's" summary="We sell Samsung product's" primaryActionLabel="Deals for you" secondaryActionLabel="More Info "/>
        <Promo />
      </div>
  )
}

export default Preview

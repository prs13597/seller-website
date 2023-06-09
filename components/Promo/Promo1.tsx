import '../../app/globals.css'

const Promo1 = ({backgroundImage}) => {
  return (
    <div className="relative md:container md:mx-auto p-32 flex flex-col justify-end">
        {
            backgroundImage && (
            <div className="h-full absolute top-0 left-0 z-0">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20 "/>
            </div>
            )
        }
        <div className="text-6xl subpixel-antialiased font-extrabold text-right pb-12">
            Promo Header
        </div>
        <div className="text-3xl subpixel-antialiased text-right pb-12">
            Promo Summary
        </div>
        <button className="p-12 text-2xl max-h-min max-w-min self-end">
            Action
        </button>
    </div>
  );
}

export default Promo1;
  
import '../../app/globals.css'

import { useState } from 'react';
import Image from 'next/image'

const Promo2 = () => {
    const slides = [
        {
          url: '/first.png',
          header: "Galaxy Book Series",
          summary: "Avail benefits up to ₹19000*"
        },
        {
          url: '/second.png',
        },
        {
          url: '/third.png',
        },
    
        {
          url: '/four.png',
        }
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    return (
        <div className='max-w-[1400px] w-full m-auto py-16 px-4 relative group' style={{height: "450px"}}>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-end'
          >
             <div className="text-4xl subpixel-antialiased font-extrabold text-right py-12 pr-24">
                Promo Header
            </div>
            <div className="text-2xl subpixel-antialiased text-right pr-24">
                Promo Summary
            </div>
            <button className="p-12 text-2xl max-h-min max-w-min self-end pr-24">
                Buy Now
            </button>
          </div>
          {/* Left Arrow */}
          <div onClick={prevSlide}  className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <Image
                  src="/left.svg"
                  alt="Left Logo"
                  width={30}
                  height={30}
                  priority
                  />
          </div>
          {/* Right Arrow */}
          <div onClick={nextSlide}  className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <Image
                  src="/right.svg"
                  alt="Right Logo"
                  width={30}
                  height={30}
                  priority
                  />
          </div>
          
          <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer p-4'
                    >
                        {
                            currentIndex == slideIndex ? (
                                <Image
                                    src="/dotSelected.svg"
                                    alt="Dot"
                                    width={30}
                                    height={30}
                                    priority
                                    />
                            ) : (
                                <Image
                                    src="/dot.svg"
                                    alt="Dot"
                                    width={30}
                                    height={30}
                                    priority
                                    />
                            )

                        } 
                    </div>
                ))}
          </div>
          
        </div>
    );
}
export default Promo2;
  
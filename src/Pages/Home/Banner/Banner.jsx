import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/banner1.jpg"
import img2 from "../../../assets/banner2.jpg"
const Banner = () => {
    return (
        <div className="w-full h-[70vh] flex justify-center">
        <Carousel
          autoPlay={true} // Enable autoplay
          infiniteLoop={true} // Loop images
          interval={3000} // Slide every 3 seconds
        //   showThumbs={false} // Hide thumbnails
        //   showStatus={false} // Hide status text
          showIndicators={true} // Show dots
          stopOnHover={true} // Pause on hover
          className="w-full"
        >
          <div className="h-[70vh] flex justify-center">
            <img src={img1} alt="Banner 1" className="w-auto h-full object-cover rounded-lg" />
          </div>
          <div className="h-[70vh] flex justify-center">
            <img src={img2} alt="Banner 2" className="w-auto h-full object-cover rounded-lg" />
          </div>
          <div className="h-[70vh] flex justify-center">
            <img src={img1} alt="Banner 3" className="w-auto h-full object-cover rounded-lg" />
          </div>
        </Carousel>
      </div>

  

    );
};

export default Banner;
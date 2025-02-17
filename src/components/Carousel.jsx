import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 430, 
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024, 
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
          ],
      };
  return (

    <Slider {...settings}>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="html.png" alt="html" />
            </div>
            <div className="logo_name">HTML</div>
       
        </div>
        
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="css-3.png" alt="html" />
            </div>
            <div className="logo_name">CSS</div>
       
        </div>
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="js.png" alt="js" />
            </div>
            <div className="logo_name">Javascript</div>
       
        </div>
        
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="physics.png" alt="react" />
            </div>
            <div className="logo_name">React</div>
        </div>
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="api.png" alt="api" />
            </div>
            <div className="logo_name">Restful API</div>
        </div>
      </div>
     
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="github.png" alt="github" />
            </div>
            <div className="logo_name">Github</div>
        </div>
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="nodejs (1).png"  alt="nodejs" />
            </div>
            <div className="logo_name">Nodejs</div>
        </div>
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="react-native.png"  alt="nodejs" />
            </div>
            <div className="logo_name">React Native</div>
        </div>
      </div>
      <div className='sleek'>
        <div className='sleek_div'>
            <div>
            <img src="database.png"  alt="nodejs" />
            </div>
            <div className="logo_name">My Sql</div>
        </div>
      </div>
    
      
    </Slider>
  )
}

import React from 'react'
import List from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const filterData = List.filter((data) => data.categeory === "Free");
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  md:flex-row mt-5'>
      <div>
        <h1 className='font-bold text-xl pb-2 md:display-block'>Free Offered Courses</h1>
        <p className='text-justify leading-[1.75]'>Books are our best friends, guiding and inspiring us through every phase of life. They unlock the doors to knowledge, broaden our imagination, and connect us with the thoughts of great minds. Reading books enhances focus, builds empathy, and fosters personal growth. Whether for learning, relaxation, or exploration, books are a timeless source of wisdom and joy. They empower us to dream, reflect, and transform our perspectives, making them an invaluable part of a fulfilling life.</p>
      </div>

      <div >
        <Slider {...settings}>

          {filterData.map((item) => (
            <Cards items={item} key={item.id}></Cards>
          ))}
        </Slider>
      </div>

    </div>
  </>
  )
}

export default Freebook
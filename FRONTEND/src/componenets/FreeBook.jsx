import React,{useEffect,useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios'


import Cards from './Cards';


function FreeBook() {
  const [book, setBook] = useState([])
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book")
          
          const data = res.data.filter((data) => data.category==="Free")
          console.log(res.data)
          setBook(data)
        }
        catch (error) {
          console.log( error)
        } 
    }
    getBook()
  }, [])

  
    

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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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



    
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
        <h1 className='text-amber-100 font-bold text-xl pb-4 dark:text-black '>Free Offered Courses</h1>
        <p className='text-amber-50 dark:text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae reprehenderit architecto non molestiae aperiam minima! Ducimus eum laboriosam reiciendis atque ullam aliquid minus velit mollitia veritatis et. Beatae, aperiam?</p>

        </div>
    
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
    </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook

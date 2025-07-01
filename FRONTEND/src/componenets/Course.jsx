import React,{useState, useEffect} from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Course = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      }
      catch (error) {
        console.log( error)
      } 
  }
  getBook()
}, [])
  


  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className=' mt-16 py-16 items-center justify-center text-center '>
        <h1 className=' font-bold text-2xl md:text-4xl'>
          Welcome to BookHive – Where Every Page is an<span className='text-pink-400'> Adventure!!!</span>

        </h1>

        <p className='mt-12'>
          Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
          Ab id,est fuga repellendus
          laboriosam sunt quia quis eaque 
          doloremque cum magni aliquam sit itaque,
          alias asperiores impedit culpa placeat quisquam.
          Lorem ipsum dolor, 
          sit amet consectetur adipisicing elit. 
          Hic iste illo 
          exercitationem excepturi nostrum, 
          incidunt quaerat delectus debitis 
          odit ipsam vero quas similique 
          consequatur at eum.
          Nisi libero error autem?
        </p>
        <Link to="/">
        <button className='bg-pink-500 text-white mt-10 rounded-lg px-6 py-2 font-medium text-lg hover:bg-pink-800 duration-300'>
          Back
        </button>
        </Link>
        
        <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
      </div>
      </div>
    </div>

    </>
  )
}

export default Course

import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='text-justify mt-12'>
          As soon as you log in and step into the book store, it feels like entering a magical realm. Shelves filled with books stretch endlessly, like pathways to countless worlds of knowledge and imagination.

          Each corner of the store whispers stories waiting to be discovered. Adventure novels brim with epic journeys, mystery books hold secrets yet to be unraveled, and self-help guides invite you to grow and transform.

          In one section, colorful children's tales transport you back to childhood wonder, while in another, classic literature stands tall, carrying the wisdom of ages.

          As you walk further, the aroma of fresh pages and the soft hum of curiosity surround you, as if the books themselves are alive, calling you to pick them up and dive into their worlds. Here, every book is a doorway, and the store is yours to explore.
        </p>
        <Link to='/'><button className='bg-red-500 py-2 px-4 rounded-xl hover:bg-red-400 cursor-pointer mt-6'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
            <Cards key={item.id} items={item} />
          ))
        }
      </div>
    </div>
  </>
  )
}

export default Course
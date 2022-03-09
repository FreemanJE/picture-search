import React from 'react'
import { useContext } from 'react';
import MyContext from '../context/MyContext'
import SearchForm from './SearchForm'
import PreviousArrow from '../assets/previousArrow.png'
import NextArrow from '../assets/nextArrow.png'


const Content = () => {
  const { search, data, page, imageList, previousPage, nextPage } = useContext(MyContext);

  return (
    <div id='input'>
      <i><h2 style={{ color: 'blue', marginTop: '30px' }} >Images of {search}</h2></i>
      <SearchForm />

      <div>
        <p style={{ fontSize: '20px' }} >Page: {page} of {data.results.total_pages}

          {page > 1 && <button className='prevBtn' onClick={previousPage}>
            <img style={{ width: '100px', height: '60px' }} src={PreviousArrow} alt='' /> </button>}

          {page < data.results.total_pages && <button className='prevBtn' onClick={nextPage}>
            <img style={{ width: '80px', height: '60px' }} src={NextArrow} alt='' /> </button>}

        </p>
      </div>
      <div className='image'>
        {imageList}
      </div>

      {/* <div>
        <p>Page: {page} of {data.results.total_pages} </p>
      </div> */}

      {console.log(page)}
      {/* {page > 1 && <button onClick={previousPage}>
        <img className='prevBtn' style={{ width: '100px', height: '60px' }} src={PreviousArrow} alt='' />
      </button>}
      {page < data.results.total_pages && <button  onClick={nextPage}>Next</button>} */}
      {/* <Cleanup /> */}

      {/* <img src={PreviousArrow} alt='' /> */}
    </div>
  )
}

export default Content
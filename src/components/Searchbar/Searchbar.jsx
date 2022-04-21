import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='mainBody'>
        <div className='SearchWrapper'>
            <input></input>
            <button>SEARCH</button>
        </div>
        <div className='bodyTitle'>
            <h1>Express yourself.</h1>
        </div>
    </div>
  )
}

export default Searchbar
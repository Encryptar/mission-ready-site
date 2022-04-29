import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='main-body'>
        <div className='search-wrapper'>
            <input></input>
            <button>SEARCH</button>
        </div>
        <div className='body-title'>
            <h1>Express yourself.</h1>
        </div>
    </div>
  )
}

export default Searchbar
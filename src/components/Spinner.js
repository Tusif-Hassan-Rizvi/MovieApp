import React from 'react'
import loading from '../loading.gif'

export default function Spinner() {
  return (
    <div className='image-container'>
   <img src={loading} alt="Spinner" className='loading-image' />
    </div>
  )
}

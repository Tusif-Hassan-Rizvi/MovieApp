import React from 'react'

export default function Inputbar(props) {
  return (
    <div className="inputbox">
        <input type="search" placeholder="Type movie name here ex: lucy" value={props.data} onChange={props.HandleChange} />
        <button onClick={props.handleClick}>Search</button>
      </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
export default function Home(props) {
  return (
    <div id='home'>
      {props.rooms.map((val)=>{
        return <Link to={`Homes${val.name}`}><button id='homecard' style={{backgroundColor:val.color}}>{val.name}</button> </Link>
      })}
      <br />
    <Link to={'/addroom'}><button id='add'>+</button></Link>
    </div>
  )
}

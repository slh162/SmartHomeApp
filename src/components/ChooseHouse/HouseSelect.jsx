import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './hoseselect.css'

export default function HouseSelect(props) {

const [name, setName]=useState('')
const [type, setType]=useState('')
const [color, setColor]=useState('')


  return (
    <div id='Homesele'>
        <select className='roomselect' name="home" onChange={(e)=>{setType(e.target.value)}}>
          <option value="choose">Choose New Room</option>
            <option value="Living room">Living room</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
        </select>
        <br />
        <br />
        <input className='roomselect' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name of the room' maxLength={'5'}/>
        <br />
        <br />
        <label htmlFor="colorchange">Select color </label>
        <br />
        <input id='colorchange'  onChange={(e)=>{setColor(e.target.value)}} type="color" />
        <br />
        <br />
      <Link to={'/'}>  <button onClick={()=>{props.addRoom(name,type,color)}}>Create</button></Link>
    </div>
  )
}

import React from 'react'
import { useState } from 'react';
import './homes.css'

export default function AddProd(props) {
    const [product,setProduct]=useState('')
  return (
    <div>
        <select name="product" id="productselect" onChange={(e)=>{setProduct(e.target.value)}}>
            <option value="selectprod">Select Product</option>
            <option value="Water Heater">Water Heater</option>
            <option value="stereo">stereo</option>
            <option value="AirConditioner">AirConditioner</option>
            <option value="Lamp">Lamp</option>
        </select>
        <br />
        <br />
        <button id='plus' onClick={()=>{props.addProduct(props.index,product); props.change()}}>Add</button>
    </div>
  )
}

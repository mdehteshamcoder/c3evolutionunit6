import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../Home'
import { Login } from './Login'

import {Products} from '../Products'



import { useDispatch } from 'react-redux/es/exports'
import { IndividualItem } from './IndividualItem'
import { errorCart, loadingCart } from '../../Reudx/Cart/action'
import {CartContext} from "../CartContext"
export const Pages = () => {
  const dispatch=useDispatch()
  const [userData,setUserData] =React.useState([])
  

  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/Products"  element={<Products/>}/>
        
        
       
        <Route path="*"  element={<NotFound/>}/>
       </Routes>  
    </div>
  )
}
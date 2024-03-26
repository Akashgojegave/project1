import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Add() {
  const{register,handleSubmit}=useForm()
  let token = sessionStorage.getItem("token")
  const navi= useNavigate()
  function saveData(data)
  {
    console.log(data)
      axios.post("http://127.0.0.1:8000/v1/anime/",data,{
        // "headers":{
        //   "Authorization":`token ${token}`
        // }
      })
      navi("/show")
  }

  return (
    <div class="container">
    <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='r'>Enter Anime Name:</label>
            <input id='r' type="text" className='form-control' 
            {...register("anime_name")}/>
        
        
            <label htmlFor='a'>Enter Anime Year:</label>
            <input id="a" type="text" className='form-control mb-5'
            {...register("anime_year")} />
        
        
            <input type="submit" className='col-6' />
            <input type="reset"  className='col-6 float-end'/>
        </form>     
    </div>
    
  )
}

export default Add
import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
 
function Delete() {
    const {pk}= useParams()
    const navi=useNavigate()
    //let token = sessionStorage.getItem("token")
    function deleteData()
    {
        axios.delete(`http://127.0.0.1:8000/v1/anime/${pk}/`,{
        //   "headers":{
        //     "Authorization":`token ${token}`
        //   }
        })
        navi("/show")
    }

  return (
    <>
    <form onSubmit={()=>deleteData()}>
        <h1>do you wanna delete</h1>
        
        <button type="submit" class="btn btn-danger me-5">Yes</button>
        <NavLink to="/show"><button type="button" class="btn btn-warning">No</button></NavLink>
    </form>
    </>
  )
}

export default Delete
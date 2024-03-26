import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Show() {
    const [users, setUsers]=useState([])
    //let token = sessionStorage.getItem("token")
    async function showdata()
    {
        let result= await axios.get("http://127.0.0.1:8000/v1/anime/",{
            // "headers":{
            //   "Authorization":`token ${token}`
            // }
          })
        setUsers(result.data)
    }


     
    useEffect(()=>{showdata()},[])
  return (
    <>
                <table class="table">
        <thead>
            <tr>
            
            <th scope="col">Anime Name</th>     
            <th scope="col">Anime Year</th>
           
            </tr>
        </thead>
        <tbody>
            {users.map((obj)=>{
                return(
                    <tr>
                        <td>{obj.anime_name}</td>
                        <td>{obj.anime_year}</td>
                        
                        <td>
                            <NavLink to={`/update/${obj.id}`}>
                            <button type="button" class="btn btn-success me-5">Update</button>
                            </NavLink>

                            <NavLink to={`/delete/${obj.id}`}>
                            <button type="button" class="btn btn-danger">Delete</button>
                            </NavLink>
                        
                        </td>
                    </tr>
                )


            })}
            
            
          
        </tbody>
        </table>
    </>

  )
}

export default Show
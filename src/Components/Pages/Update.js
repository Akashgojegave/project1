import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {pk}=useParams()
    const {register, handleSubmit ,setValue}=   useForm()
    const navi =useNavigate()
    //let token = sessionStorage.getItem("token")
    async function fetchdata()
    {
        
        const result = await axios.get(`http://127.0.0.1:8000/v1/anime/${pk}/`,{
        //   "headers":{
        //     "Authorization":`token ${token}`
        //   }
        })

        
        setValue("anime_name",result.data.anime_name)
        setValue("anime_year",result.data.anime_year)

    }

   

    function saveData(data)
    {
        axios.put(`http://127.0.0.1:8000/v1/anime/${pk}/`,data,{
        //   "headers":{
        //     "Authorization":`token ${token}`
        //   }
        })
        navi("/show")

    }

    useEffect(()=>{fetchdata()},[])

  return (
    <>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='r'>Enter Anime Name:</label>
            <input id='r' type="text" className='form-control' 
            {...register("anime_name")}/>
        
            
        
            <label htmlFor='a'>Enter Anime year:</label>
            <input id="a" type="text" className='form-control mb-5'
            {...register("anime_year")} />
        
        
            <input type="submit"  value="Update" className='col-6' />
            <input type="reset"  className='col-6 float-end'/>

            </form>
    </>
    

  )
}

export default Update
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FaCartShopping } from "react-icons/fa6";
import monitor from "../../assets/monitor3.png"
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Data } from '../../context/Data';
import axios from 'axios';
import toast from 'react-hot-toast';

const Detail = () => {
  let navigate = useNavigate()
  // to get the id from the url
  const {id} = useParams()
  // to get all product data
  const {AllProduct,setAllProduct,Formconfirmation,Handlechange} = useContext(Data)
  let [isvisible,setisvisible] = useState(false)
  // to get the data for the clicked element from Allproduct usestate
  const [clicked,setclicked] = useState(()=>{
  return  AllProduct.filter((prod)=>parseInt(prod.Id) === parseInt(id))[0]
  })
  const [DataForm,setDataForm] = useState({
    nom : "",
    email : "",
    carte : "",
    tel : ""
  })
  // this funtion to handle the change input
  const Change = (event)=>{
    Handlechange(event,setDataForm,DataForm)
  }
  // this function to confirm
  const Confirm = (event)=>{
    event.preventDefault();
    let qte = document.getElementById("qte").value
    if (Formconfirmation(DataForm) === 4) {
      const Form = new FormData();
      Form.append("nom",DataForm.nom)
      Form.append("email",DataForm.email)
      Form.append("carte",DataForm.carte.toUpperCase())
      Form.append("tel",DataForm.tel)
      Form.append("qte",qte)
      Form.append("id",parseInt(clicked.Id))
      Form.append("price",parseInt(clicked.Price)*parseInt(qte))
      axios.post("http://localhost/MY_PROJECTS/electronic_project/Order.php",Form).then((res)=>{
        toast.success("you Order is succesfully sent!! wait a call from our support ")
        navigate("/")
      })
    }
  }
  return (
    <>
      <section className='mt-20 w-[95%]  relative left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 place-items-center gap-2'>
        <div className='w-full self-start flex justify-center'>
          <img src={`http://localhost/MY_PROJECTS/electronic_project/assets/${clicked.Pic}`} alt="pic" className=' h-[400px] mix-blend-multiply object-cover'/>
        </div>
        <div className='flex flex-col gap-5 items-center md:items-start w-[90%] md:w-full'>
          <nav className='font-bold self-stretch flex flex-col gap-3  relative bef'>
            <h1  className='text-black text-[25px]'>{clicked.Nom}</h1>
            <h1 className='text-black text-[25px]'>{clicked.Price} Moroccan Dirham</h1>
          </nav>
          <ul className='font-bold list-disc self-stretch'>
            <li>Free Shipping</li>
            <li>Delivered with complete packaging</li>
            <li>Délais de livraison environ 2 jours</li>
          </ul>
          <div>
            <p className='leading-relaxed text-black'>{clicked.Description}</p>
          </div>
          <p className='text-sm text-zinc-500'>All Curren products come with a one-year warranty</p>
          {
            parseInt(clicked.qte) !== 0 ?
            <div className='flex items-center flex-col md:flex-row gap-4'>
            <input type="number" id='qte' className='w-[150px] h-10 rounded-md border border-blue-900 pl-2' defaultValue={1} min={1}/>
            <button className='w-[250px] h-12 text-sm rounded-md sh bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 flex items-center justify-center gap-3' onClick={()=>setisvisible(true)}>to track the order.</button>
          </div> : <><p className='text-blue-900 font-bold'>Rupture du stock</p></>
          }
         {
          isvisible ? 
          <form className='flex flex-col gap-5 self-stretch' onSubmit={Confirm}>
            <TextField name='nom' label="Nom Complet" type="text" variant="standard" onChange={Change}/>
            <TextField name='email' label="Email" type="email" variant="standard" onChange={Change}/>
            <TextField name='carte' label="Carte National" type="text" variant="standard" onChange={Change}/>
            <TextField name='tel' label="Tel" type="tel" variant="standard" onChange={Change}/>
          <button className='w-[200px] self-center h-12 text-sm rounded-md sh bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 flex items-center justify-center gap-3'><FaCartShopping /> Shop Now</button>
        </form>
        : <></>
         }
        </div>
      </section>
    </>
  )
}

export default Detail
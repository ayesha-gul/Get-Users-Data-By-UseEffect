import React, { useEffect, useState } from 'react'
import './App.css'

const UseEffectApi = () => {
    const[data,setData]=useState([]);

    const Getusers = async ()=> {
        let response = await fetch ("https://jsonplaceholder.typicode.com/albums/1/photos");
        setData(await response.json()); 
        console.log(setData);

    }


    useEffect( () => {
        Getusers()
    },[])
  return (
    <div>
        <h2>List of Github Users</h2>
        <div className='container-fluid mt-5'  >
           <div className='row text-center'>
               {
                   data.map((curentElemt) => {
                       return(
                        <div className='col-10 col-md-6 mt-5' key={curentElemt.id}>
                        <div className='card p-2'>
                              <div className='d-flex align-items-center'>
                                 <div className='image'>
                                     <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmUIS-KfJzHJ28V5u4lKEmF1GTbbkqE9__A&usqp=CAU' className='rounded' width={155}/>
                                     </div>
                                  <div className='ml-3 w-100'>
                                      <h4 className='mb-8 mt-0 textLeft'>Anabiya </h4><span className='textLeft'>{curentElemt.title}</span>
                                      <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                       <div className='d-flex flex-column'><span className='articles'>Articles</span> <span className='number1'></span></div>
                                       <div className='d-flex flex-column'><span className='articles'>Followers</span> <span className='number1'></span></div>
                                       <div className='d-flex flex-column'><span className='articles'>Rating</span> <span className='number1'></span></div>
                                          </div>
                                    </div>   
                              </div>
                        </div>
                        </div>
                        
                       )

                   })
               }
            
           </div>
        </div>
    </div>
  )
}

export default UseEffectApi
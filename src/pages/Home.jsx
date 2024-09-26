import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
import Add from'../Components/Add'


function Home() {
  const[uploadVideoResponse,setuploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState([])


  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between '>
        <div className='add-videos'>
       <Add setuploadVideoResponse={setuploadVideoResponse}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}}>Watch History <i></i></Link>
      </div>


      <div className='container-fluid w-100 mt-3 mb-5 row '>

        <div className='all-videos col-lg-9'>
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>

       <div className='all-videos col-lg-3'>
        <Category dropVideoResponse={dropVideoResponse}/>
       </div>
      </div>
    </>
  )
}

export default Home

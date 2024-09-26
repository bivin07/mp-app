import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {uploadVideoAPI} from '../../services/allAPI'


function Add({setuploadVideoResponse}) {


  
  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
   })



const[show,setShow]=useState(false);
const handleClose=()=>setShow(false)
const handleShow=()=>setShow(true);



// upload video url change to embed
console.log(uploadVideo)

const getYoutubeLink=(e)=>{
  const {value}=e.target

 if(value.includes("v=")){

  let vID=value.split("v=")[1].slice(0,11)
  console.log({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`});

  setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})

 }else{
setUploadVideo({...uploadVideo,link:""})
 }
}


// uplod video (api coonect)

const handleAdd=async()=>{
  const{id,caption ,url,link}=uploadVideo
  if(!id||!caption||!url||!link){
    alert("please fill missing fields")
  }else{
    const result =await uploadVideoAPI(uploadVideo)
    console.log(result)
    if(result.status>=200&&result.status<300){
       handleClose()

       alert("video uploded sucessfully")

       setUploadVideo({
        id:"",caption:"",url:"",link:""
       })


       setuploadVideoResponse(result.data)

    }else{
      console.log(result.message)
      alert(result.message)
    }
     
  }
}




  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload videos</h5>
      <Button onClick={handleShow}  className='ms-2'><i class="fa-solid fa-upload fa-beat"></i> </Button>
    </div>



<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 1 */}

        <FloatingLabel
        controlId="floatingInput"
        label="video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder=" enter video id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTitle" label="Video title " className='mb-3'>
        <Form.Control type="text" placeholder="enter video name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
{/* 2 */}
        <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="image url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video url" className='mt-3'>
        <Form.Control type="text" placeholder="video url" onChange={getYoutubeLink} />
      </FloatingLabel>
 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

      </>

  )
}

export default Add

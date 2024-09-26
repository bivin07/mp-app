import React from 'react'
import { Card,  CardTitle, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
  <>

   <Row className='mt-5 align-items-center justify-content-between w-100'>
   <Col></Col>


   <Col lg={5}>
   <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis corporis dicta, modi accusamus. Fuga a id nemo 
    rem laudantium error architecto eligendi, delectus velit dolore saepe qui quam!</p>
    <button onClick={()=>navigateByUrl('Home/')} className='btn btn-info mt-4'>Get started</button>
   </Col>

   <Col lg={5}>
   <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
   </Col>

   <Col></Col>


   </Row>



  <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column '>
    <h3>Features</h3>
     <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>


       <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant='top'  height={'300px'} width={'300px'}     src=""     />
         <Card.Body>
            <CardTitle className='text-primary'/>Managing Video<CardTitle/>
             <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi nihil odio totam. Provident distincti
              o nobis, reprehenderit at exercitationem, officiis nes
             </Card.Text>
           </Card.Body>
      </Card>

       <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant='top'  height={'300px'} width={'300px'}     src=""     />
         <Card.Body>
            <CardTitle className='text-primary'/>Managing Video<CardTitle/>
             <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi nihil odio totam. Provident distincti
              o nobis, reprehenderit at exercitationem, officiis nes
             </Card.Text>
           </Card.Body>
      </Card>

       <Card style={{width:'22rem'}} className='p-4 bg-info'>
        <Card.Img variant='top'  height={'300px'} width={'300px'}     src=""     />
         <Card.Body>
            <CardTitle className='text-primary'/>Managing Video<CardTitle/>
             <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi nihil odio totam. Provident distincti
              o nobis, reprehenderit at exercitationem, officiis nes
             </Card.Text>
           </Card.Body>
      </Card>
    </div>
  </div>

<div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>

  <div className='col-lg-5'>
    <h4 className='text-warning'>Simple,powerful & fast</h4>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis natus doloribus vel, repellat facilis molestias quis corporis doloremque similique beatae iste adipisci
     veniam fugit. Soluta maxime Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque, a eveniet natus pariatur, dolorum quos consequuntur nihil cupiditate molestiae cum necessitatibus non labore sint. Aspernatur
     sint cumque pariatur ducimus.nesciunt cumque quas.</h6>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>categories videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis natus doloribus vel, repellat facilis molestias quis corporis doloremque similique beatae iste adipisci
     veniam fugit. Soluta maxime Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque, a eveniet natus pariatur, dolorum quos consequuntur nihil cupiditate molestiae cum necessitatibus non labore sint. Aspernatur
     sint cumque pariatur ducimus.nesciunt cumque quas.</h6>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis natus doloribus vel, repellat facilis molestias quis corporis doloremque similique beatae iste adipisci
     veniam fugit. Soluta maxime Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque, a eveniet natus pariatur, dolorum quos consequuntur nihil cupiditate molestiae cum necessitatibus non labore sint. Aspernatur
     sint cumque pariatur ducimus.nesciunt cumque quas.</h6>
  </div>

<div className='video col-lg-5'>

  <iframe width="100%" height="400" src="  " title='Best of Sushin Shyam 2023|Audio Jukebox| Hits of Sushin |Ost' frameborder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"allowFullScreen>

  </iframe>
</div>



</div>



   </>
   
  )
}

export default LandingPage

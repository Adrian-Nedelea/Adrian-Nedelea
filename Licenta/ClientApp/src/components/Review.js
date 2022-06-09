import React ,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './Form.css'
import { Modal,Button,Form } from 'react-bootstrap'

async function AddReview (credentials)
{
   return fetch('Http://localhost:5000/api/review/addReview', {
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(credentials)
   })
   .then(data =>data)
}

const Review = () => {
    const [rating ,setRating]=useState(null);
    const [hover,setHover]= useState(null);
    const [show, setShow] = useState(false);
    const [nume, setNume]=useState("");
    const [text,setText]=useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async e =>{
      e.preventDefault();
  
      const response =await AddReview({
      nume,
      rating,
      text,
      });
      console.log(response);
      if(!response.ok){
       alert('Nu s-a adaugat!');
      }
      else{
       alert('E ok');

      }
    }

   

    return (
    
          <>
            <Button  className='button' style={{height:'55px'}} onClick={handleShow}>
             Intră aici pentru a lăsa o recenzie
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className='Title-Rev'>Lasă un review</Modal.Title>
              </Modal.Header>
              <Modal.Body><Form>
              <Form.Group className= "Form1-Group " controlId="Phone">
              <Form.Label className="SubTitle" style={{marginLeft:'8.5rem'}}>Numele si prenumele </Form.Label>
              <Form.Control className= "Form1-Control " type= "text" placeholder="Numele Dumnevoastra" 
                  value={nume}
                  onChange={(e)=>setNume(e.target.value)}
              /> 
            </Form.Group>
            <Form.Group className="Form1-Group"  controlId="FullName">
            <Form.Label className="SubTitle" style={{marginLeft:'10rem'}}> Apasa pe stea</Form.Label>
             <div className='Stars'>
             {[...Array(5)].map((star,i) => {
               const ratingValue= i+1;
                return (
                   <label>
                    
                        <input type="radio" name="rating" 
                        value={ratingValue}
                        onClick={(e)=> setRating(e.target.value)}/>
                         <FaStar className='star' 
                        
                          color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                          onMouseEnter= {()=> setHover(ratingValue)}
                         onMouseLeave= {()=> setHover(null)}
                        size={40}/>
                     </label>
                )
             })}
             <p className='TitleRev' style={{marginBottom:"-13px"}}> The rating is {rating} </p> 
            </div>    
      
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label className="SubTitle" style={{marginLeft:'6.9rem'}}>Ai dori sa ne mai spui ceva ?</Form.Label>
               <Form.Control as='textarea'  col={3} rows={5} value={text} onChange={(e)=> setText(e.target.value)} />
             </Form.Group>

            </Form>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Salvează
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
export default Review
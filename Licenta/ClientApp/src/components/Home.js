import './Form.css';
import Footer from './Navbar/Footer';
import Navbar from './Navbar/Index'
import './Navbar/assests/Slider'
import Slider from './Navbar/assests/Slider';
import React ,{useRef,useEffect,useState}from "react";
import Avatar from './Avatar'
import SupportWindow from "./SupportWindow/SupportWind";
import SimpleMap from './Map';
import './Chat.css'
import Review from './Review';
import TableReview from './TabelReview'


export default function Home() {
  const [visible, setVisible]=useState(false);
  const ref= useRef(null);

  useEffect ( () => {
      function handleClickOutside(event){
          if(ref.current && !ref.current.contains(event.target)) {
              setVisible(false)
          }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      };
  },[ref])
  return (
    <>
    <div className='root'>
    <Navbar/>
    <Slider/>
        <div className='Home-Title'>
            <p className='Titlu-Fain'> Clinica NedLife </p>

              <SimpleMap />
            
        </div>
    
        {/* <div ref={ref}>
        <SupportWindow
         style={{ position: 'fixed', top:"25rem" ,right:"24px"}}
        visible={visible}
        />
            
        <Avatar 
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', top:"33rem" ,right:"24px"}}
         />
        </div> */}

        

       <div  className='ContainerMap21' style={{backgroundColor:"#b5cad3"}}> 
        <h1 className="responsive-font-example">Posibile <br/> întrebări</h1> 
        <ol>
          <li className='SubTitle2-li'>Cum creez o programare?</li>
            <p className='Text-Li' >Intrați în secțiunea programări ce se gasește in partea de sus si urmați instrucțiunile.</p>
          <li className='SubTitle2-li' >Cum pot contacta clinica ?</li>
            <p className='Text-Li'>Informațiile de contact se gasesc în partea de jos si puteți trimite un mail rapid apăsând pe imaginea cu plic din sectiunea contact . </p>
        </ol>
      </div>

      <div className='ReviewContainer'>
        <p className='SubTitle'>Lasa un review <Review/> </p>
        
      </div>
      <TableReview/>
  
    <Footer style={{flexSrink:'0'}}/>
    </div>
    </> 
  )
}



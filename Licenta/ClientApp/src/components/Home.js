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
    <Navbar/>
    <Slider/>
        <div className='Home-Title'>
        <h2 className='titlul'>Clinica Med</h2>
          <p style={{backgroundColor:'red', marginTop:'25rem'}}>aaaaa</p>

          <div className='ContainerMap' >
            <SimpleMap  />
           </div>

        </div>
    
        <div ref={ref}>
        <SupportWindow
         style={{ position: 'fixed', top:"25rem" ,right:"24px"}}
        visible={visible}
        />
            
        <Avatar 
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', top:"33rem" ,right:"24px"}}
         />
        </div>

        

       
  
    <Footer style={{flexSrink:'0'}}/>

    </> 
  )
}



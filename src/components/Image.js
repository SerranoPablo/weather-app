import React from 'react';
import '../styles/Image.css';
import a01d from '../images/01d.png';
import a02d from '../images/02d.png';
import a03d from '../images/03d.png';
import a04d from '../images/04d.png';
import a09d from '../images/09d.png';
import a10d from '../images/10d.png';
import a11d from '../images/11d.png';
import a13d from '../images/13d.png';
import a50d from '../images/50d.png';


function Image({ icon }) {
 var image;
 switch (icon) {
  case ("01d"):
   image = a01d;
   break;
  case ("02d"):
   image = a02d;
   break;
  case ("03d"):
   image = a03d;
   break;
  case ("04d"):
   image = a04d;
   break;
  case ("10d"):
   image = a10d;
   break;
  case ("11d"):
   image = a11d;
   break;
  case ("09d"):
   image = a09d;
   break;
  case ("13d"):
   image = a13d;
   break;
  case ("50d"):
   image = a50d;
   break;
  default:
   image = a01d;
   break;
 }


 return (
  <div className="image">
   <img src={image} alt="" />
  </div>
 )
}

export default Image

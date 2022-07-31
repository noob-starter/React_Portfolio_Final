import React from 'react'
import Sch from '../assets/Images/school.png'
import Col from '../assets/Images/college.png'
import Gra from '../assets/Images/graduation.png'


export function School() {
    return <img src={Sch} width={60} height={60} alt="school"/>;
  }
  
 
  export function College() {
    return <img src={Col} width={60} height={50} alt="college"/>;
  }

  export function Graduation() {
    return <img src={Gra} width={50} height={50} alt="graduation"/>;
  }
  

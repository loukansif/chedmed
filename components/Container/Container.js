import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Container(props) {
  // console.log(props);
  return (
    <>
        <Navbar />
        {props.children}
        <Footer />
    </>
  )
}

import React from 'react'
import { useState } from 'react'

import img2 from './img/img1.svg'
import img3 from './img/img3.avif'
import Part1 from './Part1'

function Toggler() {
    const[isloggedin , setLoggedin] = useState(false)

    function handlelogout(){
        setLoggedin(false)
    }

    function handlelogin(){
        setLoggedin(true)
    }
  return (
    <>
    {
        isloggedin ? (
            <>
             <Part1/>
            <h1>login</h1>
            <button onClick={handlelogout}>logout</button>
            </>
        ):(
            <>
          
            <h1>logout</h1>
            <button onClick={handlelogin}>login</button>
            
          {/* <>
            <div className='nav'>
                <div className='i1'>
             <img src={img2} alt="pic" />
             </div>
           

            <div className='navtag'>
                <p id='nt'>Term Insurance</p>
                <p id='nt'>Investment plans</p>
                <p id='nt'>Health Insurance</p>
                <p id='nt'>Motor Insurance</p>
                <p id='nt'>Other Insurance</p>
                <p id='nt'>Business Insurance</p>
                <p id='nt'>Renewal</p>
            </div>
            </div>

            <div className='p1'>
        <div className='p2'>
        <div className='p4'>
            <h1 id='heading1'>Mediclaim Policy</h1>
            <p id='text1'>Medical inflation has made healthcare services expensive...<span id='text2'>Read More</span></p> 
           
          
            <h4>30 minutes claim support##</h4>
            <p id='text4'>(In 120+ cities)</p>
          
            
            <h4>Relationship manager</h4>
            <p id='text4'>For every customer</p>

            <h4>24*7 claims assistance</h4>
            <p id='text4'>In 30 mins. guaranteed*</p>

            <h4>Instant policy issuance</h4>
            <p id='text4'>No medical tests~</p>

            </div>
            <div className='p5'>
             <img id='pic1' src= {img3}alt="pic" />
            </div>


            </div>
          <div className='p3'>
            <h2>Find affordable plans with <span> up to 25% Discount**</span></h2>

            <button id='b1'>Male</button>
            <button id='b1'>Female</button>

            <h3>Select members you want to insure</h3>

            <button id='b2'>Self</button>
            <button id='b2'>Wife</button>

            <button id='b2'>Son</button>
            <button id='b2'>Daughter</button>

            <button id='b2'>Father</button>
            <button id='b2'>Mother</button>
          </div>
            </div>
            </> */}
            </>
        )
    }

    </>
  )
}

export default Toggler